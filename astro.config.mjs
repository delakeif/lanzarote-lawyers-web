import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://lanzarotelawyers.com',
  output: 'hybrid',
  adapter: netlify(),
  integrations: [
    tailwind(),
    mdx(),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'de'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: { manualChunks: undefined },
      },
    },
  },
});
