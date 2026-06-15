// @ts-check
import { defineConfig } from 'astro/config';

// El workflow de GitHub Pages exporta DEPLOY_TARGET=gh-pages.
// Asi el sitio se publica en /eve.ar (subcarpeta) en GitHub Pages,
// y en la raiz para dev local y para Cloudflare + dominio (a futuro).
const onGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

// https://astro.build/config
export default defineConfig({
  site: onGitHubPages ? 'https://evelynbumbaca.github.io' : 'https://eve.ar',
  base: onGitHubPages ? '/eve.ar' : '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
