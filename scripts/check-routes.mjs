import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

// Ejecutar contra Wrangler local después de build. Admite una URL explícita para revisar producción.
const base = new URL(process.argv[2] || 'http://127.0.0.1:8787');
const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]).pathname);
const request = path => fetch(new URL(path, base), { redirect: 'manual', signal: AbortSignal.timeout(15000) });

for (const path of routes) {
  const response = await request(path);
  assert.equal(response.status, 200, path + ': debe responder 200 sin redirección');
  assert.match(response.headers.get('content-type') || '', /text\/html/, path + ': Content-Type');
  assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), path + ': cabecera noindex inesperada');
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff', path + ': cabeceras estáticas');
  const body = await response.text();
  assert.ok(body.includes('https://peru.connectologyia.workers.dev' + path), path + ': dominio canónico');
}

for (const path of ['/peru', '/peru/lima', '/sectores/academias-y-formacion', '/blog/automatizar-ventas-whatsapp-peru']) {
  for (const variant of [path + '/', path + '.html']) {
    const response = await request(variant);
    assert.ok([301, 308].includes(response.status), variant + ': redirección permanente');
    assert.equal(new URL(response.headers.get('location'), base).pathname, path, variant + ': destino canónico');
  }
}

const missing = await request('/pagina-inexistente-prueba-seo');
assert.equal(missing.status, 404, 'No usar fallback SPA para páginas inexistentes');
assert.match(await missing.text(), /noindex/, 'La página de error debe tener noindex');
for (const path of ['/robots.txt', '/sitemap.xml', '/rss.xml']) {
  assert.equal((await request(path)).status, 200, path + ': recurso rastreable');
}
const xml = await request('/sitemap.xml');
assert.equal(xml.status, 200, 'Sitemap debe responder directamente sin redirección');
assert.equal(xml.headers.get('content-type')?.toLowerCase(), 'application/xml; charset=utf-8');
assert.equal(await xml.text(), sitemap, 'El XML servido debe coincidir con el build');
for (const path of ['/sitemap-index.xml', '/sitemap-0.xml']) assert.equal((await request(path)).status, 404, 'Sitemap dividido residual: ' + path);
console.log(`Rutas OK en ${base.origin}: ${routes.length} páginas 200, 8 variantes redirigidas, 404 real, robots, sitemap, RSS y cabeceras.`);
