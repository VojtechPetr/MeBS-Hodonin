import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';
import fs from 'fs-extra';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin, lazyImagesRehypePlugin } from './src/utils/frontmatter';

async function copyMarkdownFiles() {
  const sourceDir = './public/assets/files';
  const destinationDir = './src/content/ke-stazeni';

  try {
    // Zajistí existenci cílové složky
    await fs.ensureDir(destinationDir);

    // Najde všechny .md soubory ve zdrojové složce a podadresářích
    const files = await fs.readdir(sourceDir, { withFileTypes: true });

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file.name);

      if (file.isDirectory()) {
        // Rekurzivně procházej podadresáře
        const subFiles = await fs.readdir(sourcePath);
        for (const subFile of subFiles) {
          if (subFile.endsWith('.md')) {
            const subFilePath = path.join(sourcePath, subFile);
            const destPath = path.join(destinationDir, subFile);
            await fs.copy(subFilePath, destPath);
          }
        }
      } else if (file.name.endsWith('.md')) {
        const destPath = path.join(destinationDir, file.name);
        await fs.copy(sourcePath, destPath);
      }
    }

    console.log('Všechny .md soubory byly zkopírovány do složky public/content/ke-stazeni.');
  } catch (err) {
    console.error('Chyba při kopírování .md souborů:', err);
  }
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com'],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      rollupOptions: {
        plugins: [
          {
            name: 'copy-md-files',
            buildStart: async () => {
              await copyMarkdownFiles();
            },
          },
        ],
      },
    },
  },
});
