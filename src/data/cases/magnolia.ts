/* ============================================================
   Caso: Magnolia — identidad visual + rediseño de flyer (2026).
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/magnolia';

export const magnolia: CaseContent = {
  /* colores de la marca: terracota, fucsia, crema y tinta */
  heroImage: `${P}/cartel.jpg`,
  theme: { wine: '#7F2704', coral: '#D3245E', cream: '#F2E7DC', night: '#1F1410' },
  meta: {
    context: { es: 'Cliente · Muebles de jardín', en: 'Client · Garden furniture' },
    role: { es: 'Identidad visual · Papelería · Señalética · Piezas gráficas', en: 'Visual identity · Stationery · Signage · Print' },
    tools: 'Illustrator · Photoshop',
  },
  intro: {
    es: 'Magnolia vende, repara y restaura muebles de exterior hace más de veinte años. Diseñé su identidad visual: un símbolo, una paleta y un sistema que funciona igual en una tarjeta, un cartel en la calle o un perfil de Instagram.',
    en: 'Magnolia has been selling, repairing and restoring outdoor furniture for over twenty years. I designed its visual identity: a symbol, a palette and a system that works just as well on a business card, a street sign or an Instagram profile.',
  },
  blocks: [
    {
      t: 'os',
      items: [
        {
          label: { es: 'Punto de partida', en: 'Starting point' },
          es: 'Un oficio con historia y clientes fieles, pero sin una imagen que lo contara ni piezas que trabajaran juntas.',
          en: 'A craft with history and loyal customers, but no image to tell its story and no pieces working together.',
        },
        {
          label: { es: 'Objetivo', en: 'Objective' },
          es: 'Una marca cálida y reconocible, fácil de aplicar en papelería, cartelería y redes.',
          en: 'A warm, recognizable brand, easy to apply across stationery, signage and social media.',
        },
        {
          label: { es: 'Solución', en: 'Solution' },
          es: 'Una flor de magnolia geométrica, una sans condensada de trazo firme y una paleta que cruza la calidez de la madera con el color del jardín.',
          en: 'A geometric magnolia flower, a firm condensed sans and a palette that blends the warmth of wood with the colors of the garden.',
        },
      ],
    },

    /* ---------- 01 · Identidad ---------- */
    { t: 'break', kind: 'img', src: `${P}/relieve.jpg`, alt: 'Logo de Magnolia impreso en relieve sobre papel texturado' },
    { t: 'h', n: '01', es: 'Identidad', en: 'Identity' },
    {
      t: 'p',
      es: 'Una flor de magnolia de cuatro pétalos, resuelta con formas simples y cortes limpios. Las piezas verdes que la enmarcan remiten a las tablas de un mueble de jardín: naturaleza y oficio en un mismo signo. El logotipo, en una sans condensada de trazo firme, se lee a distancia en carteles y fachadas.',
      en: 'A four-petal magnolia flower, built from simple shapes and clean cuts. The green pieces framing it recall the slats of garden furniture: nature and craft in a single mark. The wordmark, set in a firm condensed sans, reads from afar on signs and storefronts.',
    },
    {
      t: 'brand',
      es: 'Logo, símbolo, color y tipografía',
      en: 'Logo, symbol, color and typography',
      logo: `${P}/logo-magnolia.png`,
      icon: `${P}/icono-magnolia.png`,
      iconPlain: true,
      fontCss: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
      swatches: [
        { name: { es: 'Terracota', en: 'Terracotta' }, tone: 'wine', hex: '#7F2704' },
        { name: { es: 'Crema', en: 'Cream' }, tone: 'cream', hex: '#F2E7DC' },
        { name: { es: 'Rosa', en: 'Pink' }, tone: 'pink', hex: '#EA8BAB', bg: '#EA8BAB', fg: '#1F1410' },
        { name: { es: 'Fucsia', en: 'Fuchsia' }, tone: 'coral', hex: '#D3245E', bg: '#D3245E', fg: '#FFFFFF' },
        { name: { es: 'Lima', en: 'Lime' }, tone: 'lime', hex: '#C8CA39', bg: '#C8CA39', fg: '#1F1410' },
      ],
      labels: {
        logo: { es: 'Logo', en: 'Logo' },
        icon: { es: 'Símbolo', en: 'Symbol' },
        palette: { es: 'Paleta', en: 'Palette' },
        type: { es: 'Tipografía', en: 'Typography' },
      },
      font: {
        name: 'Bebas Neue',
        specs: [
          { es: 'Titular', en: 'Headline', size: 40, weight: 400 },
          { es: 'Subtítulo', en: 'Subhead', size: 28, weight: 400 },
          { es: 'Destacado', en: 'Highlight', size: 20, weight: 400 },
        ],
      },
    },
    {
      t: 'gallery',
      es: 'Versiones del logo sobre terracota, negro y crema',
      en: 'Logo versions on terracotta, black and cream',
      items: [
        { src: `${P}/logo-terracota.jpg`, alt: 'Logo de Magnolia en crema sobre fondo terracota' },
        { src: `${P}/logo-negro.jpg`, alt: 'Logo de Magnolia a color sobre fondo negro' },
        { src: `${P}/logo-crema.jpg`, alt: 'Logo de Magnolia a color sobre fondo crema' },
      ],
    },

    /* ---------- 02 · Aplicaciones ---------- */
    { t: 'break', kind: 'img', src: `${P}/tarjeta.jpg`, alt: 'Tarjeta personal de Magnolia sobre listones de madera' },
    { t: 'h', n: '02', es: 'Aplicaciones', en: 'Applications' },
    {
      t: 'p',
      es: 'La papelería pone el contacto al frente: la tarjeta lleva un QR que abre directo el chat de WhatsApp para pedir presupuesto. El sistema sigue en remeras, objetos y piezas impresas como el flyer.',
      en: 'The stationery puts contact first: the business card carries a QR code that opens the WhatsApp chat directly to ask for a quote. The system carries on to t-shirts, objects and printed pieces like the flyer.',
    },
    {
      t: 'gallery',
      es: 'Remera, taza y flyer',
      en: 'T-shirt, mug and flyer',
      items: [
        { src: `${P}/remera.jpg`, alt: 'Remera negra con el logo de Magnolia en crema, en un patio con muebles de madera' },
        { src: `${P}/taza.jpg`, alt: 'Taza enlozada blanca con el logo de Magnolia en negro' },
        { src: `${P}/flyer-mockup.jpg`, alt: 'Flyer A5 de Magnolia sostenido en la mano sobre el pasto' },
      ],
    },

    {
      t: 'links',
      items: [
        { es: 'Ver el caso en Behance', en: 'See the case on Behance', href: 'https://www.behance.net/gallery/174067603/Magnolia' },
      ],
    },
  ],
};
