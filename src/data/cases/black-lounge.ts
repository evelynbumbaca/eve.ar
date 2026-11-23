/* ============================================================
   Caso: Black Lounge Studio — rebranding de Blak Lashes (2025).
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/black-lounge';

export const blackLounge: CaseContent = {
  /* colores de la marca: negro, rosa, crema */
  heroImage: `${P}/hero.jpg`, /* afiches en la calle */
  theme: { wine: '#1D1D1D', coral: '#F33283', cream: '#FEFDF8', night: '#000000' },
  meta: {
    context: { es: 'Cliente · Estudio de belleza', en: 'Client · Beauty studio' },
    role: { es: 'Rebranding · Identidad visual · Patrones · Piezas gráficas · Motion', en: 'Rebranding · Visual identity · Patterns · Print · Motion' },
    tools: 'Illustrator · Photoshop · After Effects · IA generativa',
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

    { t: 'video', src: `${P}/presentacion.mp4`, poster: `${P}/presentacion-poster.jpg`, sound: true, es: 'Presentación de marca', en: 'Brand reveal' },

    /* ---------- 01 · Identidad ---------- */
    { t: 'h', n: '01', es: 'Identidad', en: 'Identity' },
    {
      t: 'p',
      es: 'El nombre se arma como un sticker: LOUNGE y STUDIO en Anton, una sans condensada de trazo pesado, y BLACK en EDO, una letra de pincel que cruza por encima como una firma de grafiti. El contorno grueso deja recortar la marca sobre cualquier fondo, y el monograma BK funciona solo en avatares, etiquetas y sellos.',
      en: 'The name is built like a sticker: LOUNGE and STUDIO in Anton, a heavy condensed sans, and BLACK in EDO, a brush script that runs across like a graffiti tag. The thick outline lets the brand sit cut out on any background, and the BK monogram works on its own for avatars, labels and stamps.',
    },
    {
      t: 'brand',
      es: 'Logo, logo horizontal, monograma, color y tipografía',
      en: 'Logo, horizontal logo, monogram, color and typography',
      logo: `${P}/logo.png`,
      logoH: `${P}/logo-horizontal.png`,
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
        logoH: { es: 'Logo horizontal', en: 'Horizontal logo' },
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
      t: 'p',
      es: 'Los trazos del grafiti —coronas, corazones, flechas, signos— se vuelven patrones en negro y en rosas; un tercero junta los stickers de la marca. Visten fondos, packaging y publicaciones.',
      en: 'The graffiti strokes —crowns, hearts, arrows, symbols— become patterns in black and in pinks; a third one gathers the brand stickers. They dress backgrounds, packaging and posts.',
    },
    {
      t: 'gallery',
      es: 'Patrones',
      en: 'Patterns',
      w: 'col',
      items: [
        { src: `${P}/patron-negro.jpg`, alt: 'Patrón de trazos de pincel en negro sobre blanco' },
        { src: `${P}/patron-rosa.jpg`, alt: 'Patrón de trazos de pincel en dos rosas' },
        { src: `${P}/patron-stickers.jpg`, alt: 'Patrón de stickers con las versiones del logo' },
      ],
    },

    /* ---------- 02 · Aplicaciones ---------- */
    { t: 'break', kind: 'img', src: `${P}/stickers-calle.jpg`, alt: 'Stickers y afiches de Black Lounge Studio pegados en una pared con grafitis' },
    { t: 'h', n: '02', es: 'Aplicaciones', en: 'Applications' },
    {
      t: 'p',
      es: 'El sistema se lleva a afiches en los colores de la paleta, una campaña de fotos, frascos para la línea de cuidado de pestañas, tote bags y stickers.',
      en: 'The system carries over to posters in the palette colors, a photo campaign, bottles for the lash care line, tote bags and stickers.',
    },
    {
      t: 'gallery',
      es: 'Afiches en cuatro colores',
      en: 'Posters in four colors',
      w: 'col',
      r: '4 / 5',
      items: [
        { src: `${P}/afiche-crema.jpg`, alt: 'Afiche crema con el logo en rosa y trazos negros' },
        { src: `${P}/afiche-rosa-claro.jpg`, alt: 'Afiche rosa persa con el logo en crema' },
        { src: `${P}/afiche-rosa.jpg`, alt: 'Afiche rosa con el logo en crema y negro' },
        { src: `${P}/afiche-negro.jpg`, alt: 'Afiche negro con el logo en rosa y trazos blancos' },
      ],
    },
    {
      t: 'video',
      src: `${P}/afiches-calle.mp4`,
      poster: `${P}/afiches-calle-poster.jpg`,
      sound: true,
      es: 'Afiches en la calle',
      en: 'Posters on the street',
    },
    {
      t: 'split',
      src: `${P}/retrato.jpg`,
      alt: 'Retrato de campaña: la dueña del estudio, con tatuajes y anteojos frente a una pared negra con BLACK escrito a pincel en rosa',
      es: 'Para la campaña, el lettering sale del logo y se pinta en grande sobre la pared: BLACK, flechas y trazos en rosa alrededor de la dueña del negocio, la misma energía de los afiches llevada a la fotografía.',
      en: 'For the campaign, the lettering breaks out of the logo and is painted large on the wall: BLACK, arrows and strokes in pink around the business owner, the same energy as the posters carried into photography.',
    },
    { t: 'video', src: `${P}/frascos-neon.mp4`, poster: `${P}/frascos-neon.jpg`, es: 'Spot producto', en: 'Product spot' },
    { t: 'video', src: `${P}/spray.mp4`, es: 'Spot producto · Lash Shampoo', en: 'Product spot · Lash Shampoo' },
    {
      t: 'gallery',
      es: 'Frascos de Lash Shampoo y Lash Oil',
      en: 'Lash Shampoo and Lash Oil bottles',
      w: 'col',
      r: '3 / 2',
      items: [
        { src: `${P}/frascos.jpg`, alt: 'Frascos ámbar de Lash Shampoo y Lash Oil sobre fondo gris claro' },
        { src: `${P}/frascos-neon.jpg`, alt: 'Los tres frascos sobre un piso negro mojado con luz de neón rosa' },
      ],
    },
    {
      t: 'gallery',
      es: 'Tote bag y sticker',
      en: 'Tote bag and sticker',
      w: 'col',
      items: [
        { src: `${P}/tote.jpg`, alt: 'Tote bag blanca con el logo de Black Lounge Studio' },
        { src: `${P}/sticker.jpg`, alt: 'Sticker redondo con el logo de Black Lounge Studio' },
      ],
    },
  ],
};
