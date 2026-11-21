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
    { t: 'h', n: '01', es: 'Identidad', en: 'Identity' },
    {
      t: 'split',
      src: `${P}/relieve.jpg`,
      alt: 'Logo de Magnolia impreso en relieve sobre papel texturado',
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

    /* ---------- 02 · Aplicaciones ---------- */
    { t: 'h', n: '02', es: 'Aplicaciones', en: 'Applications' },
    {
      t: 'p',
      es: 'La papelería pone el contacto al frente: la tarjeta lleva un QR que abre directo el chat de WhatsApp para pedir presupuesto.',
      en: 'The stationery puts contact first: the business card carries a QR code that opens the WhatsApp chat directly to ask for a quote.',
    },
    { t: 'fig', src: `${P}/tarjeta.jpg`, es: 'Tarjeta personal con QR a WhatsApp', en: 'Business card with a WhatsApp QR code' },

    /* ---------- 03 · Flyer 2026 ---------- */
    { t: 'h', n: '03', es: 'Rediseño del flyer', en: 'Flyer redesign', nav: { es: 'Flyer 2026', en: 'Flyer 2026' } },
    {
      t: 'p',
      es: 'El flyer original acumulaba fotos, textos inclinados y elementos ajenos a la marca. En 2026 lo rediseñé desde el sistema de identidad: un titular dominante, los servicios ordenados y un único llamado a la acción.',
      en: 'The original flyer piled up photos, tilted text and elements foreign to the brand. In 2026 I redesigned it from the identity system: one dominant headline, services in order and a single call to action.',
    },
    { t: 'fig', src: `${P}/flyer-2026.jpg`, es: 'Flyer A5, frente y dorso', en: 'A5 flyer, front and back' },
    {
      t: 'list',
      title: { es: 'Qué cambió', en: 'What changed' },
      items: [
        { es: 'Un solo mensaje dominante en lugar de ocho fotos de calidad despareja.', en: 'One dominant message instead of eight uneven photos.' },
        { es: 'Jerarquía clara: titular, servicios y contacto, sin textos inclinados.', en: 'Clear hierarchy: headline, services and contact, no tilted text.' },
        { es: 'Tipografía, color y símbolo de la identidad en cada elemento.', en: 'The identity’s type, color and symbol in every element.' },
        { es: 'Presupuesto sin cargo por WhatsApp como único llamado a la acción, con QR.', en: 'A free quote via WhatsApp as the single call to action, with a QR code.' },
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
