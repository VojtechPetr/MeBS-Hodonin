import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@astrolib/seo': '/node_modules/@astrolib/seo/index.ts',
    },
  },
});
