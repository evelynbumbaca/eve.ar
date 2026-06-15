// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://eve.ar',
  // Sitio 100% estatico -> Cloudflare Pages sirve /dist directamente.
  output: 'static',
  build: {
    // URLs limpias: /estudio en vez de /estudio.html
    format: 'directory',
  },
  trailingSlash: 'ignore',
});
