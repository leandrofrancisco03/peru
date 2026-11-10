import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/index.mjs';
test('host antiguo preserva ruta y consulta sin servir assets',async()=>{const r=await worker.fetch(new Request('https://peru.connectologyia.workers.dev/blog/guia?origen=a'),{});assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://mavetio.com/blog/guia?origen=a');});
test('dominio oficial sirve assets sin bucle y conserva 404',async()=>{const r=await worker.fetch(new Request('https://mavetio.com/no-existe'),{ASSETS:{fetch:async()=>new Response('No existe',{status:404})}});assert.equal(r.status,404);assert.equal(r.headers.get('location'),null);});
test('preview no indexable',async()=>{const r=await worker.fetch(new Request('https://version-peru.connectologyia.workers.dev/'),{ASSETS:{fetch:async()=>new Response('preview')}});assert.equal(r.headers.get('x-robots-tag'),'noindex');});
test('HTTP del dominio oficial redirige antes de servir assets y conserva ruta y consulta', async () => {
 for (const path of ['/', '/peru/ica', '/peru/lambayeque?origen=consulta&zona=Chiclayo', '/rss.xml']) {
  const response = await worker.fetch(new Request('http://mavetio.com' + path), {
   ASSETS: { fetch: async () => { throw new Error('HTTP no debe servir HTML ni XML duplicado'); } },
  });
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://mavetio.com' + path);
 }
});
test('WWW conserva la redirección directa a HTTPS sin WWW', async () => {
 for (const protocol of ['http:', 'https:']) {
  const response = await worker.fetch(new Request(protocol + '//www.mavetio.com/peru/ica?origen=web'), {});
  assert.equal(response.status, 301);
  assert.equal(response.headers.get('location'), 'https://mavetio.com/peru/ica?origen=web');
 }
});
test('HTTP de localhost sigue disponible para las verificaciones de Wrangler', async () => {
 const response = await worker.fetch(new Request('http://127.0.0.1:8787/peru/ica'), {
  ASSETS: { fetch: async () => new Response('local') },
 });
 assert.equal(response.status, 200);
 assert.equal(response.headers.get('location'), null);
});
