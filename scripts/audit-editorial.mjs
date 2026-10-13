import fs from 'node:fs/promises';
import { parse } from 'parse5';
import { elements, attr, text, pagePath } from './lib/html.mjs';
const directory = 'docs/auditoria-editorial';
await fs.mkdir(directory, { recursive: true });
function extract(html) {
  const nodes = elements(parse(html));
  const main = nodes.find(n => n.tagName === 'main');
  const content = elements(main || parse(html));
  const clean = n => text(n).replace(/\s+/g, ' ').trim();
  return { title: clean(nodes.find(n => n.tagName === 'title') || {}), description: attr(nodes.find(n => n.tagName === 'meta' && attr(n,'name') === 'description') || {}, 'content'), h1: content.filter(n => n.tagName === 'h1').map(clean), headings: content.filter(n => ['h2','h3'].includes(n.tagName)).map(clean), paragraphs: content.filter(n => n.tagName === 'p').map(clean), links: content.filter(n => n.tagName === 'a').map(n => ({href:attr(n,'href'),text:clean(n)})), canonical: attr(nodes.find(n => n.tagName === 'link' && attr(n,'rel') === 'canonical') || {}, 'href') };
}
async function local() {
 const result={};
 for (const f of await fs.readdir('dist',{recursive:true})) if(f.endsWith('.html')) result[pagePath(f)]=extract(await fs.readFile('dist/'+f,'utf8'));
 return result;
}
if (process.argv.includes('--baseline')) {
 const pages = await local();
 await fs.writeFile(directory+'/antes.json',JSON.stringify(pages,null,2));
 const remote={};
 for (const host of ['https://connectologyia.pages.dev','https://peru.connectologyia.workers.dev']) {
  const paths=new Set(Object.keys(pages).filter(p=>p!='/404'));
  for (const sitemap of ['/sitemap.xml','/sitemap-index.xml','/sitemap-0.xml']) {
   const r=await fetch(host+sitemap); if(r.ok) for(const m of (await r.text()).matchAll(/<loc>(.*?)<\/loc>/g)) {const u=new URL(m[1]); if(!u.pathname.endsWith('.xml'))paths.add(u.pathname);}
  }
  remote[host]={};
  for (const path of paths) { const r=await fetch(host+path); remote[host][path]={status:r.status,...(r.ok?extract(await r.text()):{})}; }
 }
 await fs.writeFile(directory+'/sitios-publicados.json',JSON.stringify(remote,null,2));
 console.log('Inventario local:',Object.keys(pages).length,'Publicados:',Object.fromEntries(Object.entries(remote).map(([k,v])=>[k,Object.values(v).filter(p=>p.status===200).length])));
 const general=remote['https://connectologyia.pages.dev'];
 for(const [path,p] of Object.entries(pages)) if(general[path]?.status===200) console.log(path,JSON.stringify({title:p.title===general[path].title,h1:p.h1[0]===general[path].h1[0],sameParagraphs:p.paragraphs.filter(t=>t.length>80&&general[path].paragraphs.includes(t)).length,totalParagraphs:p.paragraphs.length}));
} else {
 await fs.writeFile(directory+'/despues.json',JSON.stringify(await local(),null,2));
}
