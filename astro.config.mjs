import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import singleSitemap from './src/integrations/single-sitemap.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://peru.connectologyia.workers.dev',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [react(), singleSitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
