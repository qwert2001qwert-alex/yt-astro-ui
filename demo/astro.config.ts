// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import tailwindcss from '@tailwindcss/vite';
import type { AstroIntegration } from 'astro';

import svelte from '@astrojs/svelte';
import vendor from 'yt-astro-ui/integration';

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(), 
    icon({
      include: {
        tabler: ['*'],
      },
      iconDir: "src/assets/icons",
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
    svelte(),
    vendor({
      config: './src/config.yaml',
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
