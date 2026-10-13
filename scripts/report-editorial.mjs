import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const dir = 'docs/auditoria-editorial/';
const before = JSON.parse(fs.readFileSync(dir + 'antes.json'));
const after = JSON.parse(fs.readFileSync(dir + 'despues.json'));
const general = JSON.parse(fs.readFileSync(dir + 'sitios-publicados.json'))['https://connectologyia.pages.dev'];
const routes = Object.keys(after).filter(p => p !== '/404');
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
const links = p => p.links.filter(l => l.href?.startsWith('/') && !l.href.startsWith('//'));
const changes = routes.map(route => {
 const a=after[route],b=before[route];
 return {route, titleBefore:b.title,titleAfter:a.title,h1Before:b.h1,h1After:a.h1,headingsBefore:b.headings,headingsAfter:a.headings,descriptionBefore:b.description,descriptionAfter:a.description,addedLinks:links(a).filter(l=>!links(b).some(o=>o.href===l.href&&o.text===l.text)),newDestinations:[...new Set(links(a).filter(l=>!links(b).some(o=>o.href===l.href)).map(l=>l.href))]};
});
const common = routes.filter(p=>general[p]?.status===200);
const overlap=(page,reference)=>page.paragraphs.filter(t=>t.length>80&&reference.paragraphs.includes(t));
const publication=[];
for(const name of fs.readdirSync('src/content/blog').filter(f=>f.endsWith('.md'))) {
 const path='src/content/blog/'+name;
 const current=fs.readFileSync(path,'utf8');
 const original=execFileSync('git',['show','HEAD:'+path],{encoding:'utf8'});
 const date=s=>s.match(/^datePublished:\s*"?([\d-]+)/m)?.[1];
 if(date(current)!==date(original))throw new Error('Publicación alterada: '+name);
 if(!current.includes('dateModified: "2026-10-12"'))throw new Error('Revisión ausente: '+name);
 publication.push({route:'/blog/'+name.replace('.md',''),published:date(current),modified:'2026-10-12'});
}
const added=changes.reduce((n,c)=>n+c.addedLinks.length,0);
const destinations=changes.reduce((n,c)=>n+c.newDestinations.length,0);
fs.writeFileSync(dir+'CAMBIOS-POR-URL.json',JSON.stringify({changes,publication},null,2));
const lines=[
 '# Diferenciación editorial de ConnectologyIA Perú',
 '', 'Revisión: 12 de octubre de 2026. Dominio: https://peru.connectologyia.workers.dev/. Cambios realizados en el proyecto local, sin desplegar ni modificar el sitio general.',
 '', '## Resultado y validación solicitada', '',
 '| Punto | Resultado |','|---|---|',
 '| 1. Páginas revisadas | 40 HTML: 39 indexables y 404 excluida. |',
 '| 2. Posts revisados | 13. |',
 '| 3. Posts profundamente reescritos | 13: introducción, desarrollo, índice, ejemplos, cierre y CTA nuevos. |',
 '| 4. Páginas distintas de artículos modificadas | 26 URLs indexables: 10 páginas/hubs y 16 páginas de servicios, sectores y regiones generadas desde datos. Todas conservan ruta. |',
 '| 5. Coincidencias anteriores | 20 rutas con párrafos compartidos; ocho artículos tenían title, H1 y desarrollo ampliamente coincidentes. Tabla debajo. |',
 '| 6. Diferenciación | 20 rutas comparables con metadata y contenido revisados; las otras 19 indexables también mejoradas. |',
 `| 7. Titles modificados | ${changes.filter(c=>c.titleBefore!==c.titleAfter).length}; valores completos antes/después en CAMBIOS-POR-URL.json. |`,
 `| 8. H1 modificados | ${changes.filter(c=>!same(c.h1Before,c.h1After)).length}. |`,
 `| 9. Estructuras H2/H3 modificadas | ${changes.filter(c=>!same(c.headingsBefore,c.headingsAfter)).length}; se conserva un H1 por documento. |`,
 `| 10. Metadescriptions modificadas | ${changes.filter(c=>c.descriptionBefore!==c.descriptionAfter).length}; únicas. OG y Twitter toman esos metadatos. |`,
 `| 11. Enlazado | ${destinations} relaciones origen→destino nuevas en el contenido principal; ${added} enlaces con destino o texto nuevos frente al inventario anterior. No incluye navegación/footer. |`,
 '| 12. Canonicals | 40 autorreferenciales revisados, incluido 404 noindex; dominio oficial. Sin hreflang. |',
 '| 13. Schemas | 40 grafos: Organization, WebSite, WebPage y tipos específicos. 13 BlogPosting, BreadcrumbList y 17 FAQ contrastadas con contenido visible. Autor/publisher referencian la organización. |',
 '| 14. Fechas | 13 datePublished conservados y comparados con Git. 13 dateModified = 2026-10-12 por reescritura sustancial. |',
 '| 15. Sitemap | sitemap.xml único con 39 URLs; sin índices divididos, errores ni endpoints técnicos. |',
 '| 16. Robots | Rastreo general permitido y sitemap del dominio oficial. |',
 '| 17. Build y controles | Build correcto; astro check sin errores, advertencias ni hints de código; 10 tests correctos. Auditoría SEO: 2063 referencias internas. HTTP local: 39 páginas 200, ocho variantes redirigidas, 404 real, XML/RSS/robots y cabeceras correctas. |',
 '| 18. Eliminar/fusionar/noindex | Ninguna URL se elimina ni se cambia a noindex. Mantener y medir antes de decidir nuevas fusiones. |',
 '', 'Los avisos de deprecación de Vite/@astrojs/react ya presentes no impiden compilar. El aislamiento de Windows bloqueó inicialmente resolución de módulos y consultas HTTP locales; las mismas comprobaciones terminaron correctamente con ejecución local autorizada, sin reinstalar ni actualizar dependencias.',
 '', '## Comparación comprobada con el sitio general', '',
 'Lectura HTTP de ambas webs antes de editar. Se cuenta igualdad literal de párrafos de más de 80 caracteres dentro de main; no es una métrica de Google ni una garantía de posicionamiento. La revisión del cuerpo confirmó la coincidencia editorial de los ocho artículos. Las notas funcionales compartidas se separan de su desarrollo.', '',
 '| URL | Párrafos compartidos antes | Después |','|---|---:|---:|',
 ...common.map(p=>`| ${p} | ${overlap(before[p],general[p]).length} | ${overlap(after[p],general[p]).length} |`),
 '', 'Los párrafos restantes corresponden a la nota editorial común de los artículos, texto funcional del contacto y enlace auxiliar de la calculadora. Se mantienen por su función. El cuerpo de los ocho artículos, sus índices y CTAs fueron sustituidos por desarrollos propios.',
 '', '## Intención editorial de los 13 artículos', '',
 '| Ruta | Tipo e intención nueva |','|---|---|',
 '| /blog/agente-ia-telegram-n8n | Arquitectura: asistente interno de pendientes comerciales con identidad y permisos. |',
 '| /blog/agentes-ia-atencion-cliente | Guía: continuidad de conversación y transferencia útil al asesor. |',
 '| /blog/automatizar-leads-n8n-crm | Integración: recepción duradera, Redis, idempotencia y conciliación de escrituras inciertas. |',
 '| /blog/automatizar-cotizaciones-seguimiento-peru | Caso de uso: control de versión aprobada y aceptación tardía. |',
 '| /blog/automatizar-inscripciones-academias-peru | Caso de uso: convocatoria, grupo y cancelación de avisos antiguos. |',
 '| /blog/automatizar-reportes-ventas-peru | Guía operativa: cierres, cobertura y correcciones entre sedes. |',
 '| /blog/automatizar-reservas-turismo-peru | Diseño operativo: reprogramación y confirmaciones parciales. |',
 '| /blog/automatizar-ventas-whatsapp-peru | Caso de uso: evidencia para pasar del mensaje al pedido. |',
 '| /blog/cuanto-cuesta-automatizar-procesos-peru | Comercial: comparar propuestas equivalentes y supuestos en soles. |',
 '| /blog/desarrollo-web-moderno-nextjs | Integración: comprobar recepción y entrega real a ventas; slug histórico preservado. |',
 '| /blog/impacto-ia-pymes-2026 | Guía de decisión: matriz de prioridad y bloqueos antes de invertir. |',
 '| /blog/orquestacion-n8n-vs-zapier | Comparativa: evaluar el mismo circuito comercial y su recuperación. |',
 '| /blog/whatsapp-api-oficial-coexistencia-peru | Guía de incorporación: continuidad del equipo, responsabilidades y contingencia. |',
 '', '## Cambios de metadata por URL', '', '| Ruta | Title nuevo | H1 nuevo |','|---|---|---|',
 ...changes.map(c=>`| ${c.route} | ${c.titleAfter.replaceAll('|','—')} | ${c.h1After.join(' / ')} |`),
 '', 'H2/H3 completos, metadescriptions anteriores y nuevas, textos/destinos de cada enlace añadido y fechas preservadas están en CAMBIOS-POR-URL.json. antes.json y despues.json conservan las extracciones, y sitios-publicados.json la comparación original.',
 '', '## Imágenes, marca y experiencia', '',
 '- Marca, logo y dominio conservados. No se duplicaron imágenes para crear señales SEO artificiales.',
 '- Se revisaron las tarjetas OG existentes de 1200×630. Se asignaron descripciones de imagen coherentes y twitter:image:alt; los nombres temáticos existentes continúan siendo válidos.',
 '- Navegación: Servicios, Sectores, Perú, Blog, Recursos y Contacto. Guías agrupadas en n8n/integraciones, agentes, WhatsApp/CRM, operación comercial y decisiones de inversión.',
 '- Portada, hub Perú y artículo técnico revisados visualmente en móvil; sin desbordamiento horizontal. Portada revisada también en escritorio.',
 '', '## Decisiones de conservación', '',
 '- Mantener /blog/desarrollo-web-moderno-nextjs: la URL histórica permanece, pero la pieza se orienta a captación e integración web/CRM. No cambiar el slug sin datos de tráfico y enlaces.',
 '- Mantener ocho guías regionales: cada una tiene un proceso, escenario de excepción y evidencia operativa propios. Lima conserva distritos dentro de una sola guía; no se generaron landings por distrito.',
 '- Mantener /privacidad indexable en esta entrega. Se reformuló su explicación sin añadir supuestas obligaciones legales, identidad fiscal ni tratamientos no confirmados.',
 '- No recomendar fusiones a partir solo de similitud temática: servicios, sectores y artículos atienden decisiones distintas. Revisar consultas e impresiones reales después de publicar antes de intervenir URLs.',
 '', '## Fuentes y límites de la comprobación', '',
 'Se consultaron documentación oficial de n8n (Webhook, gestión de errores y alojamiento), Redis SET y Telegram Bot API. Las referencias de Meta devolvieron limitación 429 en el navegador de investigación; no se afirmaron cambios, tarifas ni elegibilidad actuales. El contenido exige verificarlos durante el alta y enlaza la documentación oficial. Las comparativas no fijan tarifas o prestaciones específicas de planes sin verificación.',
 '', 'La validación es local; no confirma indexación, resultados enriquecidos ni posiciones en Google. El sitio publicado permanece en su versión anterior hasta desplegar estos cambios. No se enviaron solicitudes de indexación ni se modificó Search Console.',
];
fs.writeFileSync(dir+'INFORME-FINAL.md',lines.join('\n')+'\n');
console.log(JSON.stringify({pages:routes.length,posts:publication.length,titles:changes.filter(c=>c.titleBefore!==c.titleAfter).length,h1:changes.filter(c=>!same(c.h1Before,c.h1After)).length,structures:changes.filter(c=>!same(c.headingsBefore,c.headingsAfter)).length,descriptions:changes.filter(c=>c.descriptionBefore!==c.descriptionAfter).length,newRelationships:destinations,newLinksOrAnchors:added}));
