import { readFile, writeFile } from 'node:fs/promises';

// Cloudflare normaliza HTML con 307 por defecto. Declaramos 301 para las URLs
// realmente publicadas, sin tocar el archivo de verificación de Google.
const dist = new URL('../dist/', import.meta.url);
const sitemap = await readFile(new URL('sitemap.xml', dist), 'utf8');
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const redirects = (await readFile(new URL('../public/_redirects', import.meta.url), 'utf8')).trim();
const generated = ['/index.html / 301', '/index / 301'];
for (const route of routes.filter(path => path !== '/')) {
  for (const variant of [route + '/', route + '.html', route + '/index', route + '/index.html']) {
    generated.push(`${variant} ${route} 301`);
  }
}
if (generated.length + redirects.split('\n').length > 2000) throw new Error('Se supera el límite de redirecciones estáticas de Cloudflare.');
await writeFile(new URL('_redirects', dist), `${redirects}\n\n# URLs canónicas generadas desde el sitemap\n${generated.join('\n')}\n`);
console.log(`Cloudflare: ${generated.length} redirecciones canónicas 301 generadas.`);
