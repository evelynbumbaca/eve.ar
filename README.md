# eve.ar — Portfolio de Eve

Sitio portfolio de **Eve**, Diseñadora Multimedia & UX/UI radicada en Buenos Aires, Argentina.
Editorial, bilingüe (ES/EN) y pensado para ser profesional, atractivo e impactante.

> Punto de partida exportado desde **Claude Design**. Desde acá lo profundizamos:
> más personalidad y narrativa, secciones nuevas (Estudio, Contacto, Tienda → Gumroad),
> un hero animado de impacto, y deploy en **Cloudflare Pages** con dominio propio `eve.ar`.

## Estructura

```
index.html              Home — intro + grilla de proyectos (estilo Verena Michelitsch)
case.html               Caso de estudio — 3 variantes de layout (editorial / split / margin)
assets/
  data.js               Contenido bilingüe (bio, filtros, nav, proyectos, caso de muestra)
  chrome.js             Barra superior + menú overlay full-screen (estilo Made Thought)
  home.js               Render de la home (grilla + filtros + idioma)
  case.js               Render del caso (layouts + idioma)
  reveal.js             Animaciones de aparición al hacer scroll
  styles.css            Tokens de diseño + chrome + animaciones (compartido)
  home.css              Layout de la home
  case.css              Layout de los casos
  tweaks*.{jsx,css}     Panel de exploración de Claude Design (paleta/tipografía/ritmo) — solo dev
design-process/         Capturas del proceso y referencias (Verena, Made Thought, Gossamer)
```

## Lenguaje visual

- Minimalismo editorial B/N: papel cálido `#faf9f5` + tinta `#16150f`
- Serif **Spectral** para títulos · grotesca para UI · monoespaciada para metadatos
- Bilingüe ES/EN · animaciones de reveal · menú overlay tipográfico
- Referencias: **Verena Michelitsch** (grilla), **Made Thought** (tipografía/menú), **Gossamer** (color)

## Correr localmente

Es un sitio estático, sin paso de build. Serví la carpeta con cualquier servidor:

```bash
python3 -m http.server 8000
# o bien
npx serve .
```

Abrí http://localhost:8000

## Roadmap

- [ ] Hero animado de impacto en el inicio
- [ ] Sección **Estudio** (sobre mí + metodología)
- [ ] **Contacto** interactivo + tradicional
- [ ] **Tienda** → Gumroad (productos digitales)
- [ ] Profundizar identidad visual y narrativa
- [ ] Deploy en Cloudflare Pages + dominio `eve.ar`
