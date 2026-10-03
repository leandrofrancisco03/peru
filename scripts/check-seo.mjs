import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, relative, join } from 'node:path';
import { parse } from 'parse5';
const root = resolve('dist');
const origin = 'https://peru.connectologyia.workers.dev';
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
async function walk(dir) { const entries = await readdir(dir, { withFileTypes: true }); return (await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)))).flat(); }
function elements(node) { return [node, ...(node.childNodes || []).flatMap(elements)]; }
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const pages = new Map();
for (const file of (await walk(root)).filter(f => f.endsWith('.html') && !f.includes('googleff'))) {
 const route = '/' + relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '').replace(/\.html$/, '');
 const html = await readFile(file, 'utf8'); const nodes = elements(parse(html));
 pages.set(route, { file, route, html, nodes });
}
const titles = new Set(), descriptions = new Set(), incoming = new Set(), expectedSitemap = new Set();
let links = 0, schemas = 0, articles = 0, faqs = 0;
const normalize = value => value.replace(/\s+/g, ' ').trim();
for (const page of pages.values()) {
 const { route, html, nodes } = page;
 const select = tag => nodes.filter(n => n.tagName === tag);
 const oneMeta = (key, value) => select('meta').filter(n => attr(n, key) === value);
 const title = select('title');
 assert(title.length === 1 && text(title[0]).length > 10, route + ': título único y válido');
 assert(!titles.has(text(title[0])), route + ': título duplicado'); titles.add(text(title[0]));
 const description = oneMeta('name', 'description');
 assert(description.length === 1 && attr(description[0], 'content')?.length > 40, route + ': descripción');
 const desc = attr(description[0], 'content');
 assert(!descriptions.has(desc), route + ': descripción duplicada'); descriptions.add(desc);
 assert(select('h1').length === 1, route + ': debe tener un H1');
 assert(select('main').length === 1, route + ': debe tener un main');
 assert(attr(select('html')[0], 'lang') === 'es-PE', route + ': idioma peruano');
 assert(nodes.some(n => attr(n,'id') === 'main-content'), route + ': destino del enlace de salto');
 assert(!html.includes('/undefined') && !html.includes('client:only'), route + ': contenido o URL inválida');
 const canonical = select('link').filter(n => attr(n, 'rel') === 'canonical');
 const expected = new URL(route, origin).href;
 assert(canonical.length === 1 && attr(canonical[0], 'href') === expected, route + ': canonical incorrecto');
 assert(attr(oneMeta('property','og:url')[0], 'content') === expected, route + ': og:url incorrecto');
 const noindex = attr(oneMeta('name', 'robots')[0], 'content')?.includes('noindex');
 assert(route === '/404' ? noindex : !noindex, route + ': directiva de indexación incorrecta');
 if (!noindex) expectedSitemap.add(expected);
 const scripts = select('script').filter(n => attr(n,'type') === 'application/ld+json');
 assert(scripts.length === 1, route + ': debe tener un grafo JSON-LD');
 for (const script of scripts) {
  try {
   const data = JSON.parse(text(script)); schemas++;
   assert(data['@context'] === 'https://schema.org', route + ': contexto schema');
   const graph = data['@graph'];
   const ids = graph.map(n => n['@id']).filter(Boolean);
   assert(new Set(ids).size === ids.length, route + ': identificadores JSON-LD duplicados');
   const webPage = graph.find(n => n['@id'] === expected + '#webpage');
   assert(webPage?.url === expected && webPage?.inLanguage === 'es-PE', route + ': identidad WebPage');
   assert(webPage?.name === text(title[0]) && webPage?.description === desc, route + ': metadatos y schema no coinciden');
   if (webPage?.mainEntity?.['@id']) assert(ids.includes(webPage.mainEntity['@id']), route + ': mainEntity sin entidad');
   assert(graph.find(n => n['@type'] === 'Organization')?.telephone === '+51970430127', route + ': teléfono de organización incorrecto');
   for (const kind of ['Organization', 'WebSite']) assert(graph.some(n => n['@type'] === kind), route + ': falta ' + kind);
   const article = graph.find(n => n['@type'] === 'BlogPosting');
   if (route.startsWith('/blog/')) {
    articles++; assert(!!article, route + ': falta BlogPosting');
    assert(article?.mainEntityOfPage?.['@id'] === expected + '#webpage', route + ': mainEntityOfPage');
    assert(article?.author?.['@type'] === 'Organization', route + ': autoría');
    assert(new Date(article?.dateModified) >= new Date(article?.datePublished), route + ': fechas');
    assert(graph.some(n => n['@type'] === 'BreadcrumbList'), route + ': breadcrumb');
   }
   if (/^\/(servicios|peru|sectores)\//.test(route)) {
    const service = graph.find(n => n['@type'] === 'Service');
    assert(service?.url === expected && service?.areaServed && service?.provider?.['@id'] === origin + '/#organization', route + ': Service incompleto');
   }
   const breadcrumb = graph.find(n => n['@type'] === 'BreadcrumbList');
   if (breadcrumb) {
    assert(webPage?.breadcrumb?.['@id'] === breadcrumb['@id'], route + ': breadcrumb desconectado');
    assert(breadcrumb.itemListElement.at(-1)?.item === expected, route + ': breadcrumb no termina en la página');
    for (const [i, item] of breadcrumb.itemListElement.entries()) {
     assert(item.position === i + 1 && pages.has(new URL(item.item).pathname), route + ': breadcrumb inválido');
    }
   }
   if (['/blog', '/peru', '/sectores', '/servicios'].includes(route)) {
    assert(webPage?.['@type'] === 'CollectionPage' && webPage?.mainEntity?.['@type'] === 'ItemList', route + ': falta CollectionPage/ItemList');
    for (const item of webPage?.mainEntity?.itemListElement || []) assert(pages.has(new URL(item.url).pathname), route + ': URL de listado inexistente');
   }
   const faq = graph.find(n => n['@type'] === 'FAQPage');
   const visibleFaqs = select('details').filter(n => (attr(n, 'class') || '').includes('faq-item'));
   if (visibleFaqs.length) {
    assert(faq?.mainEntity?.length === visibleFaqs.length, route + ': FAQ schema y contenido no coinciden');
   }
   if (faq) {
    faqs++;
    assert(faq.isPartOf?.['@id'] === expected + '#webpage', route + ': FAQ desconectada');
    for (const question of faq.mainEntity) {
     const visible = visibleFaqs.find(n => normalize(text(elements(n).find(e => e.tagName === 'summary'))) === normalize(question.name));
     assert(question['@type'] === 'Question' && question.acceptedAnswer?.['@type'] === 'Answer', route + ': tipos de FAQ incorrectos');
     assert(visible && normalize(text(visible)).includes(normalize(question.acceptedAnswer.text)), route + ': FAQ no coincide con la respuesta visible');
    }
   }
   if (route === '/recursos/calculadora-ahorro-automatizacion') {
    const app = graph.find(n => n['@type'] === 'WebApplication');
    assert(app?.offers?.price === '0' && app?.offers?.priceCurrency === 'PEN', route + ': schema de calculadora gratuita en soles');
   }
  } catch (e) { failures.push(route + ': schema inválido: ' + e.message); }
 }
 for (const img of select('img')) {
  assert(attr(img,'alt') !== undefined, route + ': imagen sin alt');
  assert(attr(img,'width') && attr(img,'height'), route + ': imagen sin dimensiones');
 }
 assert(select('a').some(n => attr(n, 'href') === 'https://wa.me/51970430127'), route + ': enlace WhatsApp incorrecto');
 const refs = [...select('a').map(n => ({ value: attr(n,'href'), anchor: true })), ...select('img').map(n => ({ value: attr(n,'src') })), ...oneMeta('property','og:image').map(n => ({ value: attr(n,'content') })), ...select('link').filter(n => ['stylesheet','icon'].includes(attr(n,'rel'))).map(n => ({ value: attr(n,'href') })), ...select('script').filter(n => attr(n,'src')).map(n => ({ value: attr(n,'src') }))];
 for (const ref of refs) {
  if (!ref.value || /^(mailto:|tel:)/.test(ref.value)) continue;
  const url = new URL(ref.value, expected); if (url.origin !== origin) continue;
  links++;
  const path = decodeURIComponent(url.pathname);
  const target = pages.get(path);
  if (target) {
   if (ref.anchor && route !== path) incoming.add(path);
   if (url.hash) assert(target.nodes.some(n => attr(n,'id') === decodeURIComponent(url.hash.slice(1))), route + ': ancla rota ' + ref.value);
  } else {
   const pathOnDisk = resolve(root, '.' + path);
   assert(pathOnDisk.startsWith(root), route + ': referencia fuera de dist');
   let exists = false; try { exists = (await stat(pathOnDisk)).isFile(); } catch {}
   assert(exists, route + ': archivo o enlace roto ' + ref.value);
  }
 }
}
const sitemap = await readFile(join(root,'sitemap-0.xml'),'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).href));
for (const url of expectedSitemap) assert(sitemapUrls.has(url), 'Falta en sitemap: ' + url);
for (const url of sitemapUrls) assert(expectedSitemap.has(url), 'URL inesperada en sitemap: ' + url);
for (const route of pages.keys()) if (!['/', '/404'].includes(route)) assert(incoming.has(route), 'Página huérfana: ' + route);
const rss = await readFile(join(root,'rss.xml'),'utf8');
assert((rss.match(/<item>/g) || []).length === articles, 'RSS y artículos no coinciden');
assert(!rss.includes('undefined'), 'URL inválida en RSS');
const home = pages.get('/').html;
assert(!home.includes('<astro-island'), 'La portada no debe depender de islas hidratadas');
const robots = await readFile(join(root,'robots.txt'),'utf8');
assert(robots.includes(origin + '/sitemap-index.xml'), 'robots: sitemap incorrecto');
assert(!(await walk(root)).includes(join(root,'sitemap.xml')), 'Sitemap estático duplicado');
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1; }
else console.log(`SEO OK: ${pages.size} páginas, ${articles} artículos, ${schemas} grafos JSON-LD, ${faqs} bloques FAQ y ${links} enlaces/recursos internos. Schema y contenido visible, canonicals, RSS, sitemap, anclas y páginas huérfanas verificados.`);
