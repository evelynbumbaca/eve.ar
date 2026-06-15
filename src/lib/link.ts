/**
 * Prefija rutas internas con el base path de Astro.
 * En GitHub Pages el base es "/eve.ar/"; en dev y Cloudflare es "/".
 * Deja intactos los enlaces externos, mailto y anclas (#).
 */
export function link(path: string): string {
  if (!path) return path;
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('#')) {
    return path;
  }
  const base = import.meta.env.BASE_URL; // "/" o "/eve.ar/"
  const prefix = base.endsWith('/') ? base : base + '/';
  return prefix + path.replace(/^\//, '');
}
