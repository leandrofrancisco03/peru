import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/index.mjs';
test('host antiguo preserva ruta y consulta sin servir assets',async()=>{const r=await worker.fetch(new Request('https://peru.connectologyia.workers.dev/blog/guia?origen=a'),{});assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://mavetio.com/blog/guia?origen=a');});
test('dominio oficial sirve assets sin bucle y conserva 404',async()=>{const r=await worker.fetch(new Request('https://mavetio.com/no-existe'),{ASSETS:{fetch:async()=>new Response('No existe',{status:404})}});assert.equal(r.status,404);assert.equal(r.headers.get('location'),null);});
test('preview no indexable',async()=>{const r=await worker.fetch(new Request('https://version-peru.connectologyia.workers.dev/'),{ASSETS:{fetch:async()=>new Response('preview')}});assert.equal(r.headers.get('x-robots-tag'),'noindex');});
