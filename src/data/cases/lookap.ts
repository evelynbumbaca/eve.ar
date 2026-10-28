/* ============================================================
   Caso: Lookap — contenido real, bilingüe.
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/lookap';

export const lookap: CaseContent = {
  /* colores del proyecto (UI kit de Lookap) */
  heroVideo: { src: `${P}/app-en-uso.mp4`, poster: `${P}/hero-poster.jpg` },
  theme: { wine: '#a82838', coral: '#c86838', cream: '#fff9ed', night: '#1f0a0e' },
  meta: {
    context: { es: 'Proyecto final · Coderhouse', en: 'Final project · Coderhouse' },
    role: { es: 'Research · UX/UI · Prototipado · Identidad visual', en: 'Research · UX/UI · Prototyping · Visual identity' },
    tools: 'Figma · Illustrator · Photoshop · After Effects',
  },
  intro: {
    es: 'Lookap es un armario digital que resuelve la pregunta de todas las mañanas: ¿qué me pongo? Lo diseñé de punta a punta, del research al prototipo de alta fidelidad.',
    en: 'Lookap is a digital wardrobe that answers the question we all ask every morning: what do I wear? I designed it end to end, from research to a high-fidelity prototype.',
  },
  blocks: [
    {
      t: 'os',
      items: [
        {
          label: { es: 'Problema', en: 'Problem' },
          es: 'Elegir qué ponerse es un conflicto cotidiano. No podemos ver todo el placard a la vez, olvidamos prendas que nos encantaban y terminamos repitiendo lo que tenemos a mano.',
          en: "Choosing what to wear is a daily conflict. We can't see the whole wardrobe at once, we forget pieces we loved and end up repeating whatever is within reach.",
        },
        {
          label: { es: 'Objetivo', en: 'Objective' },
          es: 'Una herramienta práctica, útil y estética para quienes se traban a la hora de vestirse: por indecisión, o por olvidar prendas y combinaciones que les gustaban.',
          en: 'A practical, useful and beautiful tool for people who get stuck when getting dressed: from indecision, or from forgetting pieces and combinations they liked.',
        },
        {
          label: { es: 'Solución', en: 'Solution' },
          es: 'Una app para llevar la cuenta de tus prendas: sacás una foto, la etiquetás y la organizás. Armás combinaciones, las guardás y las compartís o las sometés a votación en historias.',
          en: 'An app that keeps track of your garments: take a photo, tag it and sort it. Build combinations, save them, and share them or put them to a vote in stories.',
        },
      ],
    },
    {
      t: 'gallery',
      es: 'La app en contexto',
      en: 'The app in context',
      items: [
        { src: `${P}/ctx-armario.jpg`, alt: 'Lookap: pantalla de ingreso frente a un placard' },
        { src: `${P}/ctx-jean.jpg`, alt: 'Lookap: el ropero sobre un jean' },
        { src: `${P}/ctx-flatlay.jpg`, alt: 'Lookap: combinación guardada junto a la ropa' },
      ],
    },

    /* ---------- 01 · Research ---------- */
    { t: 'break', kind: 'video', src: `${P}/percha.mp4`, alt: 'Percha en un perchero, luz natural' },
    { t: 'h', n: '01', es: 'Research', en: 'Research' },
    {
      t: 'p',
      es: 'Empecé por las personas: Camila, 28, administrativa con poco espacio en su placard, y Belén, 40, asesora de imagen y mamá de dos. Necesitan lo mismo: ahorrar tiempo al vestirse y poder mostrar y recordar looks.',
      en: 'I started with people: Camila, 28, an office worker with little closet space, and Belén, 40, an image consultant and mother of two. They need the same thing: save time getting dressed and be able to show and recall looks.',
    },
    {
      t: 'compare',
      es: 'Benchmarking',
      en: 'Benchmarking',
      rows: [
        { es: 'Fortalezas', en: 'Strengths' },
        { es: 'Debilidades', en: 'Weaknesses' },
      ],
      items: [
        {
          name: 'Combyne',
          vals: [
            { es: 'Muchas funciones y herramientas; visualmente atractiva.', en: 'Many features and tools; visually attractive.' },
            { es: 'Su público son niñas y adolescentes; se usa más para armar templates que para organizar la ropa.', en: 'Its audience is girls and teens; used more to make templates than to organize clothes.' },
          ],
        },
        {
          name: 'My Outfit',
          vals: [
            { es: 'Organiza la ropa en categorías y permite buscar por color, talle o marca.', en: 'Sorts clothes into categories and lets you search by color, size or brand.' },
            { es: 'Solo permite postear las combinaciones; a quien solo quiere organizarse no le sirve.', en: 'You can only post combinations; no use for someone who just wants to get organized.' },
          ],
        },
        {
          name: 'Closet+',
          vals: [
            { es: 'Arma el equipaje para viajar y tiene calendario de looks.', en: 'Packs for trips and has a calendar of looks.' },
            { es: 'Interfaz poco atractiva e intuitiva: hacen falta muchos pasos para lograr el objetivo.', en: 'Unattractive, unintuitive interface: too many steps to reach the goal.' },
          ],
        },
      ],
    },
    {
      t: 'p',
      es: 'Cada app resolvía una parte, pero ninguna reunía organización, combinaciones y una interfaz simple. Con un card sorting entendí cómo agrupan las funciones las personas usuarias:',
      en: 'Each app solved one part, but none brought together organization, combinations and a simple interface. A card sorting study showed how people group the features:',
    },
    {
      t: 'stats',
      items: [
        { n: '90%', es: 'agrupó “Conectar con otros usuarios” con “Encuestas en historias”.', en: 'grouped “Connect with other users” with “Polls in stories”.' },
        { n: '80%', es: 'agrupó “Hacer combinaciones” con “Combinaciones guardadas”.', en: 'grouped “Make combinations” with “Saved combinations”.' },
      ],
    },

    /* ---------- 02 · Estructura ---------- */
    { t: 'h', n: '02', es: 'Estructura', en: 'Structure' },
    {
      t: 'sitemap',
      es: 'Arquitectura de la información',
      en: 'Information architecture',
      root: 'Lookap',
      rootNote: { es: 'Siete secciones', en: 'Seven sections' },
      icon: `${P}/icono-lookap.png`,
      branches: [
        { title: { es: 'Buscar', en: 'Search' }, kids: [{ es: 'Buscar prendas', en: 'Search garments' }, { es: 'Filtros', en: 'Filters' }] },
        { title: { es: 'Home', en: 'Home' }, kids: [{ es: 'Favoritos', en: 'Favorites' }, { es: 'Looks favoritos', en: 'Favorite looks' }, { es: 'Prendas favoritas', en: 'Favorite garments' }] },
        { title: { es: 'Ropero', en: 'Closet' }, kids: [{ es: 'Organizar ropa', en: 'Organize clothes' }, { es: 'Looks', en: 'Looks' }, { es: 'Hacer combinaciones', en: 'Make combinations' }, { es: 'Combinaciones guardadas', en: 'Saved combinations' }] },
        { title: { es: 'Cámara', en: 'Camera' }, kids: [{ es: 'Guardar prenda en el ropero', en: 'Save garment to closet' }] },
        { title: { es: 'Social', en: 'Social' }, kids: [{ es: 'Feed de amigos', en: 'Friends feed' }, { es: 'Encuestas en historias', en: 'Polls in stories' }, { es: 'Perfil', en: 'Profile' }] },
        { title: { es: 'Compras', en: 'Shop' }, kids: [{ es: 'Carrito', en: 'Cart' }, { es: 'Códigos de descuento', en: 'Discount codes' }] },
        { title: { es: 'Notificaciones', en: 'Notifications' }, kids: [] },
      ],
    },
    {
      t: 'steps',
      es: 'Task flow: Belén comparte un look con una clienta',
      en: 'Task flow: Belén shares a look with a client',
      items: [
        { es: 'Ingresa a la app', en: 'Opens the app' },
        { es: 'Entra al ropero', en: 'Goes to the closet' },
        { es: 'Abre combinaciones', en: 'Opens combinations' },
        { es: 'Arma el look', en: 'Builds the look' },
        { es: 'Lo comparte', en: 'Shares it' },
      ],
    },

    /* ---------- 03 · Prototipo y pruebas ---------- */
    { t: 'h', n: '03', es: 'Prototipo y pruebas', en: 'Prototype and testing' },
    {
      t: 'fidelity',
      es: 'Cuatro niveles de fidelidad',
      en: 'Four levels of fidelity',
      logo: `${P}/logo-lookap.png`,
      items: [
        { kind: 'sketch', title: { es: 'Papel', en: 'Paper' }, text: { es: 'Bocetos a mano de las pantallas clave.', en: 'Hand sketches of the key screens.' } },
        { kind: 'wire', title: { es: 'Baja digital', en: 'Low digital' }, text: { es: 'Wireframes: estructura y jerarquía.', en: 'Wireframes: structure and hierarchy.' } },
        { kind: 'mid', title: { es: 'Media', en: 'Mid' }, text: { es: 'Navegación y etiquetas, todavía en grises.', en: 'Navigation and labels, still in grey.' } },
        { kind: 'hi', title: { es: 'Alta', en: 'High' }, text: { es: 'Identidad aplicada y prototipo interactivo.', en: 'Identity applied and interactive prototype.' } },
      ],
    },
    {
      t: 'p',
      es: 'Probé el prototipo con cinco personas y medí qué tan sencilla les resultó cada tarea.',
      en: 'I tested the prototype with five people and measured how easy each task was.',
    },
    {
      t: 'bars',
      es: 'Pruebas de usabilidad · 5 respuestas',
      en: 'Usability tests · 5 responses',
      legend: [
        { key: 'a', label: { es: 'Muy fácil', en: 'Very easy' } },
        { key: 'b', label: { es: 'Fácil', en: 'Easy' } },
        { key: 'c', label: { es: 'Más o menos', en: 'So-so' } },
        { key: 'd', label: { es: 'Difícil', en: 'Hard' } },
      ],
      items: [
        { q: { es: 'Sacar una foto de una prenda', en: 'Taking a photo of a garment' }, parts: [{ key: 'b', pct: 80 }, { key: 'c', pct: 20 }] },
        { q: { es: 'Hacer una combinación', en: 'Making a combination' }, parts: [{ key: 'a', pct: 20 }, { key: 'b', pct: 80 }] },
        { q: { es: 'Compartir el look con amigos', en: 'Sharing the look with friends' }, hot: true, parts: [{ key: 'c', pct: 80 }, { key: 'd', pct: 20 }] },
        { q: { es: 'Ir al perfil', en: 'Going to the profile' }, parts: [{ key: 'a', pct: 60 }, { key: 'b', pct: 20 }, { key: 'c', pct: 20 }] },
      ],
    },
    {
      t: 'cols',
      items: [
        {
          title: { es: 'Lo que encontré', en: 'What I found' },
          es: 'Compartir el look fue lo más difícil: el 80% lo calificó “más o menos”. Lo demás resultó fácil.',
          en: 'Sharing the look was the hardest: 80% rated it “so-so”. Everything else was easy.',
        },
        {
          title: { es: 'Lo que cambié', en: 'What I changed' },
          es: 'Sacar la foto, la función principal, pasó al centro de la tab bar. Y sumé el ícono de compartir en cada sección del ropero, los chats, las encuestas y el perfil.',
          en: 'Taking the photo, the main function, moved to the center of the tab bar. And I added a share icon to every closet section, chats, polls and the profile.',
        },
      ],
    },

    /* ---------- 04 · Identidad ---------- */
    { t: 'break', kind: 'img', src: `${P}/textura.jpg`, alt: 'Tejido, lana y jean apilados junto a una ventana', w: 'narrow' },
    { t: 'h', n: '04', es: 'Identidad', en: 'Identity' },
    {
      t: 'brand',
      es: 'Logo, color y tipografía',
      en: 'Logo, color and type',
      logo: `${P}/logo-lookap.png`,
      icon: `${P}/icono-lookap.png`,
      swatches: [
        { name: { es: 'Primario', en: 'Primary' }, tone: 'coral' },
        { name: { es: 'Secundario', en: 'Secondary' }, tone: 'cream' },
        { name: { es: 'Acento', en: 'Accent' }, tone: 'wine' },
      ],
      type: [
        { name: 'Doppelganger', text: { es: 'Logo. Tipografía de Speak Design.', en: 'Logo. Typeface by Speak Design.' } },
        { name: 'Roboto', text: { es: 'Interfaz: títulos 20, 18 y 14 pt; botones en bold 16 pt.', en: 'Interface: headings 20, 18 and 14 pt; buttons in bold 16 pt.' } },
      ],
    },
    {
      t: 'links',
      items: [
        {
          es: 'Probar el prototipo en Figma',
          en: 'Try the Figma prototype',
          href: 'https://www.figma.com/proto/tmesKsrV5FW1vJ73ifa5jv/Atomic-Grilla-y-Layout-Evelyn-Bumbaca?page-id=0%3A1&node-id=183%3A2990&viewport=-2764%2C-2466%2C0.5108493566513062&scaling=scale-down',
        },
        {
          es: 'Ver el caso en Behance',
          en: 'See the case on Behance',
          href: 'https://www.behance.net/gallery/121073817/Lookap-UX-UI-Design',
        },
      ],
    },
  ],
};
