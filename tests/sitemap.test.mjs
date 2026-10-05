import test from 'node:test';
import assert from 'node:assert/strict';
import { pagePath } from '../scripts/lib/html.mjs';
import singleSitemap, { sitemapEntry, renderSitemap } from '../src/integrations/single-sitemap.mjs';
import { mkdtemp, writeFile, readFile, unlink, rmdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const site = 'https://peru.connectologyia.workers.dev';
test('normaliza archivos de páginas estáticas y dinámicas sin alterar slugs terminados en index', () => {
  assert.equal(pagePath('index.html'), '/');
  assert.equal(pagePath('blog/index.html'), '/blog');
  assert.equal(pagePath('blog\\articulo.html'), '/blog/articulo');
  assert.equal(pagePath('blog/mi-index.html'), '/blog/mi-index');
});
test('excluye noindex y none para robots o Googlebot, aunque cambien mayúsculas u orden de atributos', () => {
  for (const directive of ['noindex, follow', 'NOINDEX', 'none']) {
    assert.equal(sitemapEntry('/oculta', `<meta content="${directive}" name="robots">`, site), null);
    assert.equal(sitemapEntry('/oculta', `<meta name="Googlebot" content="${directive}">`, site), null);
  }
  assert.equal(sitemapEntry('/normal', '<meta name="robots" content="index, nofollow">', site), site + '/normal');
});
test('excluye errores, namespaces privados, previews y endpoints técnicos', () => {
  for (const path of ['/404', '/404.html', '/api/leads', '/_astro/file', '/private/informe', '/privado', '/admin', '/preview/demo', '/previews/demo', '/rss.xml', '/datos.json']) {
    assert.equal(sitemapEntry(path, '', site), null, path);
  }
});
test('excluye redirecciones y canonical alternativo; preserva canonical autorreferencial', () => {
  assert.equal(sitemapEntry('/vieja', '<meta http-equiv="refresh" content="0;url=/nueva">', site), null);
  assert.equal(sitemapEntry('/alias', '<link rel="canonical" href="/principal">', site), null);
  assert.equal(sitemapEntry('/blog', `<link rel="canonical" href="${site}/blog">`, site), site + '/blog');
});
test('genera XML escapado, ordenado y sin duplicados ni fechas inventadas', () => {
  const xml = renderSitemap([site + '/z', site + '/', site + '/z', site + '/a&b']);
  assert.equal((xml.match(/<url>/g) || []).length, 3);
  assert.equal((xml.match(/<urlset\b/g) || []).length, 1);
  assert.ok(xml.includes('/a&amp;b</loc>'));
  assert.ok(xml.indexOf(site + '/</loc>') < xml.indexOf(site + '/z</loc>'));
  assert.ok(!/lastmod|priority|changefreq|sitemapindex/.test(xml));
});
test('el hook descubre nuevas salidas dinámicas; ignora endpoints HTML y archivos ajenos al manifiesto', async () => {
  const folder = await mkdtemp(join(tmpdir(), 'connectologyia-sitemap-'));
  const dir = pathToFileURL(folder + '/');
  const files = ['index.html', 'articulo-a.html', 'articulo-b.html', 'oculta.html', 'endpoint.html', 'verificacion.html'];
  try {
    for (const file of files) await writeFile(new URL(file, dir), file === 'oculta.html' ? '<meta name="robots" content="noindex">' : '<h1>Página de prueba</h1>');
    const integration = singleSitemap();
    integration.hooks['astro:config:done']({ config: { site } });
    integration.hooks['astro:routes:resolved']({ routes: [
      { pattern: '/', type: 'page', isPrerendered: true },
      { pattern: '/[slug]', type: 'page', isPrerendered: true },
      { pattern: '/endpoint', type: 'endpoint', isPrerendered: true },
    ] });
    const assets = new Map([
      ['/', [new URL('index.html', dir)]],
      ['/[slug]', [new URL('articulo-a.html', dir), new URL('oculta.html', dir)]],
      ['/endpoint', [new URL('endpoint.html', dir)]],
    ]);
    const build = () => integration.hooks['astro:build:done']({ dir, assets, logger: { info() {} } });
    await build();
    let xml = await readFile(new URL('sitemap.xml', dir), 'utf8');
    assert.equal((xml.match(/<url>/g) || []).length, 2);
    assets.get('/[slug]').push(new URL('articulo-b.html', dir));
    await build();
    xml = await readFile(new URL('sitemap.xml', dir), 'utf8');
    assert.equal((xml.match(/<url>/g) || []).length, 3);
    assert.ok(xml.includes('/articulo-b</loc>'));
    assert.ok(!/oculta|endpoint|verificacion/.test(xml));
  } finally {
    for (const file of [...files, 'sitemap.xml']) await unlink(new URL(file, dir)).catch(error => { if (error.code !== 'ENOENT') throw error; });
    await rmdir(folder);
  }
});
