import { readFile, writeFile } from 'node:fs/promises';
import { relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { elements, attr, pagePath } from '../../scripts/lib/html.mjs';

// Private pages outside these namespaces must declare robots=noindex.
export const isExcludedPath = path => /\.(?:html|xml|json|txt)$/i.test(path)
  || path.split('/').some(segment => /^(?:404|500|api|_.*|admin|private|privado|privada|preview|previews)$/i.test(segment));

export function sitemapEntry(path, html, site) {
  if (isExcludedPath(path)) return null;
  const nodes = elements(parse(html));
  const blocked = nodes.some(node => node.tagName === 'meta'
    && ['robots', 'googlebot'].includes((attr(node, 'name') || '').toLowerCase())
    && /(?:^|[\s,])(?:noindex|none)(?:$|[\s,])/i.test(attr(node, 'content') || ''));
  if (blocked || nodes.some(node => node.tagName === 'meta' && (attr(node, 'http-equiv') || '').toLowerCase() === 'refresh')) return null;
  const url = new URL(path, site);
  const canonical = nodes.find(node => node.tagName === 'link' && attr(node, 'rel') === 'canonical');
  // A non-self-canonical page must not compete with its preferred URL.
  if (canonical && new URL(attr(canonical, 'href'), url).href !== url.href) return null;
  return url.href;
}

export function renderSitemap(urls) {
  const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
  const unique = [...new Set(urls)].sort();
  if (unique.length > 50000) throw new Error('El sitemap único supera el límite de 50.000 URLs.');
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + unique.map(url => `  <url><loc>${escape(url)}</loc></url>`).join('\n') + '\n</urlset>\n';
  if (Buffer.byteLength(xml) > 50 * 1024 * 1024) throw new Error('El sitemap único supera 50 MiB.');
  return xml;
}

/** @returns {import('astro').AstroIntegration} */
export default function singleSitemap() {
  let site;
  let routes = [];
  return {
    name: 'connectologyia-single-sitemap',
    hooks: {
      'astro:config:done': ({ config }) => {
        if (!config.site || new URL(config.site).protocol !== 'https:') throw new Error('El sitemap requiere site con HTTPS.');
        site = config.site;
      },
      'astro:routes:resolved': ({ routes: resolved }) => { routes = resolved; },
      'astro:build:done': async ({ dir, assets, logger }) => {
        const urls = [];
        const excluded = [];
        for (const route of routes) {
          if (route.type !== 'page' || !route.isPrerendered) continue;
          // Astro provides the actual output files for static AND dynamic pages.
          for (const file of assets.get(route.pattern) || []) {
            const relativeFile = relative(fileURLToPath(dir), fileURLToPath(file));
            if (relativeFile.startsWith('..') || !relativeFile.endsWith('.html')) continue;
            const path = pagePath(relativeFile);
            const entry = sitemapEntry(path, await readFile(file, 'utf8'), site);
            if (entry) urls.push(entry); else excluded.push(path);
          }
        }
        if (!urls.length) throw new Error('Astro no proporcionó páginas indexables para el sitemap.');
        await writeFile(new URL('sitemap.xml', dir), renderSitemap(urls));
        logger.info(`sitemap.xml: ${new Set(urls).size} URLs; páginas excluidas: ${excluded.join(', ') || 'ninguna'}. Endpoints y archivos públicos no se incluyen.`);
      },
    },
  };
}
