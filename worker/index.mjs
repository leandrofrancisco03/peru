export default {
 async fetch(request, env) {
  const url = new URL(request.url);
  if (['peru.connectologyia.workers.dev', 'www.mavetio.com'].includes(url.hostname)) {
   url.hostname = 'mavetio.com'; url.protocol = 'https:'; url.port = '';
   return Response.redirect(url.href, 301);
  }
  const response = await env.ASSETS.fetch(request);
  if (url.hostname.endsWith('.workers.dev')) {
   const headers = new Headers(response.headers); headers.set('X-Robots-Tag', 'noindex');
   return new Response(response.body, {status:response.status, headers});
  }
  return response;
 }
};
