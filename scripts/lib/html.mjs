// Utilidades compartidas por la generación del sitemap y la auditoría del HTML.
export function elements(node) { return [node, ...(node.childNodes || []).flatMap(elements)]; }
export const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
export const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
export const pagePath = file => '/' + file.replaceAll('\\', '/').replace(/(^|\/)index\.html$/, '$1').replace(/\.html$/, '').replace(/\/$/, '');
