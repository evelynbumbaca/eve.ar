/* ============================================================
   Caso: Black Lounge Studio — rebranding de Blak Lashes (2025).
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/black-lounge';

export const blackLounge: CaseContent = {
  /* colores de la marca: negro, rosa, crema */
  heroImage: `${P}/hero.jpg`,
  theme: { wine: '#1D1D1D', coral: '#F33283', cream: '#FEFDF8', night: '#000000' },
  meta: {
    context: { es: 'Cliente · Estudio de belleza', en: 'Client · Beauty studio' },
    role: { es: 'Rebranding · Identidad visual · Patrones · Piezas gráficas · Redes', en: 'Rebranding · Visual identity · Patterns · Print · Social media' },
    tools: 'Illustrator · Photoshop',
  },
  intro: {
    es: 'Blak Lashes era un estudio de extensiones de pestañas que quería convertirse en algo más grande: un espacio de belleza y expresión personal. Hice el rebranding a Black Lounge Studio, una identidad de espíritu urbano —lettering a pincel, stickers y grafiti— pensada para destacarse en la calle y en Instagram.',
    en: 'Blak Lashes was a lash extension studio that wanted to become something bigger: a space for beauty and self-expression. I rebranded it as Black Lounge Studio, an identity with an urban spirit —brush lettering, stickers and graffiti— built to stand out on the street and on Instagram.',
  },
  blocks: [
    {
      t: 'os',
      items: [
        {
          label: { es: 'Punto de partida', en: 'Starting point' },
          es: 'Un estudio con clientas fieles, pero con un nombre que lo encasillaba en las pestañas y un logo gótico que no hablaba del lugar que quería ser.',
          en: 'A studio with loyal clients, but a name that boxed it into lashes and a gothic logo that said nothing about the place it wanted to become.',
        },
        {
          label: { es: 'Objetivo', en: 'Objective' },
          es: 'Acompañar el salto de estudio de pestañas a lounge de belleza con una marca joven, con actitud y fácil de llevar a redes, productos y merch.',
          en: 'Support the leap from lash studio to beauty lounge with a young brand, full of attitude and easy to carry onto social media, products and merch.',
        },
        {
          label: { es: 'Solución', en: 'Solution' },
          es: 'Un logo armado como sticker, con BLACK escrito a pincel sobre una sans condensada, un monograma BK, patrones de trazos de grafiti y una paleta de rosas intensos con negro.',
          en: 'A logo built like a sticker, with BLACK brushed over a condensed sans, a BK monogram, graffiti-stroke patterns and a palette of bold pinks with black.',
        },
      ],
    },

    /* ---------- 01 · Identidad ---------- */
    { t: 'h', n: '01', es: 'Identidad', en: 'Identity' },
    {
      t: 'p',
      es: 'El nombre se arma como un sticker: LOUNGE y STUDIO en Anton, una sans condensada de trazo pesado, y BLACK en EDO, una letra de pincel que cruza por encima como una firma de grafiti. El contorno grueso deja recortar la marca sobre cualquier fondo, y el monograma BK funciona solo en avatares, etiquetas y sellos.',
      en: 'The name is built like a sticker: LOUNGE and STUDIO in Anton, a heavy condensed sans, and BLACK in EDO, a brush script that runs across like a graffiti tag. The thick outline lets the brand sit cut out on any background, and the BK monogram works on its own for avatars, labels and stamps.',
    },
    {
      t: 'brand',
      es: 'Logo, monograma, color y tipografía',
      en: 'Logo, monogram, color and typography',
      logo: `${P}/logo.png`,
      icon: `${P}/icono.png`,
      iconPlain: true,
      fontCss: 'https://fonts.googleapis.com/css2?family=Anton&display=swap',
      swatches: [
        { name: { es: 'Rosa', en: 'Rose' }, tone: 'coral', hex: '#F33283', bg: '#F33283', fg: '#FEFDF8' },
        { name: { es: 'Rosa persa', en: 'Persian pink' }, tone: 'pink', hex: '#FF80B5', bg: '#FF80B5', fg: '#1D1D1D' },
        { name: { es: 'Rosa lavanda', en: 'Lavender pink' }, tone: 'lav', hex: '#FFACD6', bg: '#FFACD6', fg: '#1D1D1D' },
        { name: { es: 'Negro', en: 'Black' }, tone: 'wine', hex: '#1D1D1D', bg: '#1D1D1D', fg: '#FEFDF8' },
        { name: { es: 'Crema', en: 'Cream' }, tone: 'cream', hex: '#FEFDF8', bg: '#FEFDF8', fg: '#1D1D1D' },
      ],
      labels: {
        logo: { es: 'Logo', en: 'Logo' },
        icon: { es: 'Monograma', en: 'Monogram' },
        palette: { es: 'Paleta', en: 'Palette' },
        type: { es: 'Tipografía', en: 'Typography' },
      },
      font: {
        name: 'Anton',
        specs: [
          { es: 'Titular', en: 'Headline', size: 40, weight: 400 },
          { es: 'Subtítulo', en: 'Subhead', size: 28, weight: 400 },
          { es: 'Destacado', en: 'Highlight', size: 20, weight: 400 },
        ],
      },
    },
    {
      t: 'gallery',
      es: 'Versiones del logo y monograma',
      en: 'Logo versions and monogram',
      w: 'col',
      items: [
        { src: `${P}/logo-crema.jpg`, alt: 'Logo de Black Lounge Studio en rosas sobre fondo crema' },
        { src: `${P}/logo-negro.jpg`, alt: 'Logo de Black Lounge Studio en crema sobre fondo negro' },
        { src: `${P}/monograma-rosa.jpg`, alt: 'Monograma BK sobre fondo rosa' },
      ],
    },
    {
      t: 'p',
      es: 'Los trazos del grafiti —coronas, corazones, flechas, signos— se vuelven patrones en negro y en rosas; un tercero junta los stickers de la marca. Visten fondos, packaging y publicaciones.',
      en: 'The graffiti strokes —crowns, hearts, arrows, symbols— become patterns in black and in pinks; a third one gathers the brand stickers. They dress backgrounds, packaging and posts.',
    },
    {
      t: 'gallery',
      es: 'Patrones',
      en: 'Patterns',
      items: [
        { src: `${P}/patron-negro.jpg`, alt: 'Patrón de trazos de pincel en negro sobre blanco' },
        { src: `${P}/patron-rosa.jpg`, alt: 'Patrón de trazos de pincel en dos rosas' },
        { src: `${P}/patron-stickers.jpg`, alt: 'Patrón de stickers con las versiones del logo' },
      ],
    },

    /* ---------- 02 · Aplicaciones ---------- */
    { t: 'break', kind: 'img', src: `${P}/frascos.jpg`, alt: 'Frascos ámbar de Lash Shampoo y Lash Oil con la etiqueta de Black Lounge Studio' },
    { t: 'h', n: '02', es: 'Aplicaciones', en: 'Applications' },
    {
      t: 'p',
      es: 'El sistema se lleva a afiches en los colores de la paleta, frascos para la línea de cuidado de pestañas, tote bags, stickers y las portadas de historias destacadas de Instagram, con íconos dibujados con el mismo pincel.',
      en: 'The system carries over to posters in the palette colors, bottles for the lash care line, tote bags, stickers and the Instagram highlight covers, with icons drawn with the same brush.',
    },
    {
      t: 'gallery',
      es: 'Afiches en cuatro colores',
      en: 'Posters in four colors',
      r: '4 / 5',
      items: [
        { src: `${P}/afiche-crema.jpg`, alt: 'Afiche crema con el logo en rosa y trazos negros' },
        { src: `${P}/afiche-rosa-claro.jpg`, alt: 'Afiche rosa persa con el logo en crema' },
        { src: `${P}/afiche-rosa.jpg`, alt: 'Afiche rosa con el logo en crema y negro' },
        { src: `${P}/afiche-negro.jpg`, alt: 'Afiche negro con el logo en rosa y trazos blancos' },
      ],
    },
    {
      t: 'gallery',
      es: 'Tote bag y sticker',
      en: 'Tote bag and sticker',
      items: [
        { src: `${P}/tote.jpg`, alt: 'Tote bag blanca con el logo de Black Lounge Studio' },
        { src: `${P}/sticker.jpg`, alt: 'Sticker redondo con el logo de Black Lounge Studio' },
      ],
    },
    { t: 'fig', src: `${P}/destacadas.jpg`, w: 'wide', es: 'Portadas de historias destacadas para Instagram', en: 'Instagram highlight covers' },
  ],
};
