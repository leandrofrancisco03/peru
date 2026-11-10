// Read-only, bounded audit of the public sitemap and the explicitly reported URLs.
// Usage: node scripts/audit-indexability.mjs [output-directory]
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import { parse } from 'parse5';
import { elements, attr, text } from './lib/html.mjs';

const origin = 'https://mavetio.com';
const out = resolve(process.argv[2] || 'docs/indexacion-2026-11-09');
await mkdir(out, { recursive: true });
const hash = value => createHash('sha256').update(value).digest('hex');
const normalize = value => value.replace(/\s+/g, ' ').trim();
function inspect(html, url) {
  const nodes = elements(parse(html));
  const main = nodes.find(n => n.tagName === 'main');
  const mainNodes = main ? elements(main) : [];
  const find = (tag, key, value) => nodes.find(n => n.tagName === tag && (!key || attr(n, key) === value));
  const mainText = normalize(main ? text(main) : '');
  const schemas = []; const schemaErrors = [];
  for (const n of nodes.filter(n => n.tagName === 'script' && attr(n, 'type') === 'application/ld+json')) {
    try { const data = JSON.parse(text(n)); schemas.push(...(data['@graph'] || [data])); }
    catch (e) { schemaErrors.push(e.message); }
  }
  const anchors = scope => scope.filter(n => n.tagName === 'a' && attr(n, 'href')).flatMap(n => {
    try { const u = new URL(attr(n, 'href'), url); return ['mavetio.com', 'www.mavetio.com'].includes(u.hostname) ? [{ url: u.href, path: u.pathname, label: normalize(text(n)) }] : []; }
    catch { return []; }
  });
  return {
    title: normalize(text(find('title') || {})),
    description: attr(find('meta', 'name', 'description') || {}, 'content') || null,
    canonical: attr(find('link', 'rel', 'canonical') || {}, 'href') || null,
    robots: nodes.filter(n => n.tagName === 'meta' && /^(robots|googlebot)$/i.test(attr(n, 'name') || '')).map(n => ({ name: attr(n, 'name'), content: attr(n, 'content') })),
    headings: mainNodes.filter(n => /^h[1-3]$/.test(n.tagName)).map(n => ({ level: n.tagName, text: normalize(text(n)) })),
    mainWords: mainText.split(/\s+/).filter(Boolean).length, mainHash: hash(mainText), mainText,
    links: anchors(nodes), mainLinks: anchors(mainNodes),
    schemaTypes: schemas.map(n => n['@type']), schemaErrors,
  };
}
async function request(url) {
  const chain = []; let current = url;
  try {
    for (let i = 0; i < 6; i++) {
      const u = new URL(current);
      if (!['mavetio.com', 'www.mavetio.com'].includes(u.hostname)) return { url, chain, error: 'Redirect outside audit scope' };
      const response = await fetch(current, { redirect: 'manual', signal: AbortSignal.timeout(15000), headers: { 'User-Agent': 'Mavetio-SEO-Audit/1.0' } });
      const body = await response.text();
      const headers = Object.fromEntries(['location', 'content-type', 'x-robots-tag', 'link', 'last-modified', 'etag'].map(k => [k, response.headers.get(k)]));
      chain.push({ url: current, status: response.status, ...headers });
      if ([301, 302, 303, 307, 308].includes(response.status) && headers.location) { current = new URL(headers.location, current).href; continue; }
      return { url, chain, finalUrl: current, status: response.status, bodyHash: hash(body), bytes: Buffer.byteLength(body), ...((headers['content-type'] || '').includes('text/html') ? { html: inspect(body, current) } : { document: body }) };
    }
    return { url, chain, error: 'Redirect limit exceeded' };
  } catch (e) { return { url, chain, error: e.message, cause: e.cause?.code }; }
}
const sitemap = await request(origin + '/sitemap.xml');
if (sitemap.status !== 200 || !sitemap.document) throw new Error('Public sitemap unavailable; no crawl performed');
await writeFile(join(out, 'production-sitemap.xml'), sitemap.document);
const urls = [...sitemap.document.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
if (!urls.length || urls.length > 100 || urls.some(u => new URL(u).origin !== origin)) throw new Error('Unexpected sitemap scope');
const publicPages = [];
for (let i = 0; i < urls.length; i += 4) publicPages.push(...await Promise.all(urls.slice(i, i + 4).map(request)));
const variants = [
  'http://mavetio.com/', 'http://www.mavetio.com/', 'https://www.mavetio.com/',
  'http://mavetio.com/peru/ica', 'http://mavetio.com/peru/lambayeque',
  'http://www.mavetio.com/peru/ica?origen=auditoria', 'https://www.mavetio.com/peru/lambayeque?origen=auditoria',
  origin + '/servicios/desarrollo-de-software/', origin + '/servicios/desarrollo-de-software.html',
  origin + '/pagina-inexistente-prueba-seo', origin + '/robots.txt', origin + '/rss.xml',
];
const extra = [];
for (let i = 0; i < variants.length; i += 4) extra.push(...await Promise.all(variants.slice(i, i + 4).map(request)));
const rss = extra.find(r => r.url.endsWith('/rss.xml'));
if (rss?.document) await writeFile(join(out, 'production-rss.xml'), rss.document);
const local = [];
for (const url of urls) {
  const path = new URL(url).pathname;
  try { const body = await readFile(resolve('dist', path === '/' ? 'index.html' : path.slice(1) + '.html'), 'utf8'); local.push({ url, bodyHash: hash(body), html: inspect(body, url) }); }
  catch (e) { local.push({ url, error: e.message }); }
}
function inlinks(pages, target, key) { return pages.filter(p => p.url !== target && p.html?.[key].some(link => new URL(link.url).origin === origin && link.path === new URL(target).pathname)).map(p => p.url); }
const comparison = urls.map(url => {
  const pub = publicPages.find(p => p.url === url), loc = local.find(p => p.url === url);
  return { url, publicStatus: pub.status, identicalHtml: pub.bodyHash === loc.bodyHash, identicalMain: pub.html?.mainHash === loc.html?.mainHash, publicInlinks: inlinks(publicPages, url, 'links'), publicMainInlinks: inlinks(publicPages, url, 'mainLinks'), localInlinks: inlinks(local, url, 'links'), localMainInlinks: inlinks(local, url, 'mainLinks') };
});
const report = { capturedAt: new Date().toISOString(), method: 'GET, manual redirects, sitemap capped at 100 same-origin URLs; not Googlebot or Search Console evidence', sitemap, publicPages, extra, local, comparison };
await writeFile(join(out, 'evidence.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify({ out, pages: publicPages.length, failures: [...publicPages, ...extra].filter(p => p.error).map(p => ({ url:p.url,error:p.error })), publicStatusCounts: publicPages.reduce((a,p)=>(a[p.status]=(a[p.status]||0)+1,a),{}), identicalHtml:comparison.filter(p=>p.identicalHtml).length, identicalMain:comparison.filter(p=>p.identicalMain).length, variantChains:extra.map(p=>({url:p.url,chain:p.chain.map(h=>({url:h.url,status:h.status,location:h.location})),error:p.error})) }, null, 2));
