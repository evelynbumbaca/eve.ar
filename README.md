# eve.ar — Portfolio de Eve

Sitio portfolio de **Eve**, Diseñadora Multimedia & UX/UI radicada en Buenos Aires, Argentina.
Editorial, bilingüe (ES/EN), minimalista en blanco y negro. Construido con **Astro** y pensado
para desplegarse en **Cloudflare Pages** con dominio propio `eve.ar`.

## Stack

- **[Astro](https://astro.build)** — sitio 100% estático (sin JS de framework en runtime).
- CSS propio con *design tokens* (sin frameworks de estilo).
- Bilingüe ES/EN con intercambio en vivo (sin recargar).
- Animaciones: hero generativo en `<canvas>` + *reveal* por máscara al hacer scroll.

## Estructura

```
src/
  pages/
    index.astro          Home — hero animado + intro + grilla de trabajos
  layouts/
    Base.astro           HTML base, fuentes, y lógica de cliente (idioma, menú, reveal)
  components/
    Topbar.astro         Barra superior (logo · ES/EN · menú)
    MenuOverlay.astro     Menú overlay full-screen (estilo Made Thought)
    Hero.astro           Hero: flow-field de tinta en canvas + título cinético
    ProjectCard.astro    Tarjeta de proyecto
    SiteFooter.astro     Footer editorial con CTA
    T.astro              Helper de texto bilingüe (<T k="..." /> o <T es=".." en=".." />)
  data/
    site.ts              Datos: navegación, filtros, proyectos, redes, contacto
  i18n/
    ui.ts                Microcopy de interfaz (ES/EN)
  styles/
    tokens.css           Variables de diseño (paleta, tipografía, escala, ritmo)
    global.css           Reset, base y utilidades compartidas
design-process/          Capturas, referencias y la versión vanilla original (legacy-vanilla/)
```

## Correr localmente

```bash
npm install        # una sola vez
npm run dev        # servidor de desarrollo -> http://localhost:4321
npm run build      # compila a /dist
npm run preview    # previsualiza /dist
```

## Despliegue (Cloudflare Pages)

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+ (recomendado 22)
- `/dist` no se versiona (lo regenera Cloudflare en cada push).

## Lenguaje visual

- Papel cálido `#faf9f5` + tinta `#16150f`. Serif **Spectral** protagonista; grotesca para UI; mono para metadatos.
- Referencias: Verena Michelitsch (grilla), Made Thought (tipografía/menú).

## Roadmap

- [x] Base Astro + sistema de diseño en tokens
- [x] Home: hero animado (canvas) + grilla de trabajos + footer
- [x] Bilingüe ES/EN en vivo
- [ ] Página **Estudio** (sobre mí + metodología)
- [ ] Página **Contacto** (interactivo + tradicional)
- [ ] Página **Tienda** → Gumroad
- [ ] Páginas de **caso** `/trabajos/[slug]`
- [ ] Cargar trabajos reales (reemplazar placeholders)
- [ ] Deploy en Cloudflare Pages + dominio `eve.ar`
