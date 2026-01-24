import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://geisterhand.dev',
  integrations: [
    tailwind()
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
