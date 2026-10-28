/* ============================================================
   Caso: Lookap — contenido real, bilingüe.
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/lookap';

export const lookap: CaseContent = {
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
          es: 'Elegir qué ponerse es un conflicto cotidiano. No podemos ver todo el placard a la vez, olvidamos prendas que nos encantaban y terminamos repitiendo lo que tenemos a mano. La ropa admite mil combinaciones, pero la vida agitada no deja tiempo para explorarlas.',
          en: "Choosing what to wear is a daily conflict. We can't see the whole wardrobe at once, we forget pieces we loved and end up repeating whatever is within reach. Clothes allow a thousand combinations, but a busy life leaves no time to explore them.",
        },
        {
          label: { es: 'Objetivo', en: 'Objective' },
          es: 'Crear una herramienta práctica, útil y estética para quienes entran en conflicto a la hora de vestirse: por indecisión, o por el olvido de ciertas prendas y de viejas combinaciones que les gustaba hacer.',
          en: 'Create a practical, useful and beautiful tool for people who struggle when getting dressed: out of indecision, or from forgetting certain pieces and old combinations they liked.',
        },
        {
          label: { es: 'Solución', en: 'Solution' },
          es: 'Una app para llevar la cuenta de todas tus prendas: sacás una foto, la etiquetás y la organizás por categorías. Armás combinaciones, las guardás y las compartís con amigos o las sometés a votación en historias. Una interfaz atractiva, sin elementos innecesarios.',
          en: 'An app that keeps track of all your garments: take a photo, tag it and sort it into categories. Build combinations, save them, share them with friends or put them to a vote in stories. An attractive interface with nothing unnecessary.',
        },
      ],
    },
    {
      t: 'video',
      src: `${P}/app-en-uso.mp4`,
      es: 'La app en uso',
      en: 'The app in use',
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
    { t: 'fig', src: `${P}/screens.jpg`, es: 'Las pantallas principales', en: 'The main screens', w: 'wide' },
    { t: 'break', kind: 'video', src: `${P}/percha.mp4`, alt: 'Percha en un perchero, luz natural' },

    /* ---------- 01 · Descubrir ---------- */
    { t: 'h', n: '01', es: 'Descubrir', en: 'Discover' },
    {
      t: 'p',
      es: 'Empecé por las personas. Dos arquetipos —Camila, 28, administrativa con poco espacio en su placard, y Belén, 40, asesora de imagen y mamá de dos— marcaron las necesidades: ahorrar tiempo al vestirse y poder mostrar, recordar y agendar looks.',
      en: 'I started with people. Two archetypes — Camila, 28, an office worker with little closet space, and Belén, 40, an image consultant and mother of two — set the needs: save time when getting dressed, and be able to show, recall and schedule looks.',
    },
    { t: 'fig', src: `${P}/arquetipos.jpg`, es: 'Arquetipos: Camila y Belén', en: 'Archetypes: Camila and Belén', w: 'wide' },
    {
      t: 'list',
      title: { es: 'Funcionalidades', en: 'Features' },
      items: [
        { es: 'Sacar fotos a las prendas y hacer combinaciones.', en: 'Photograph garments and build combinations.' },
        { es: 'Organizar por estilo, color, estación y categorías personalizadas.', en: 'Organize by style, color, season and custom categories.' },
        { es: 'Guardar fotos de los looks.', en: 'Save photos of your looks.' },
        { es: 'Encuestas rápidas en historias.', en: 'Quick polls in stories.' },
        { es: 'Compartir prendas o looks con amigos, dentro de la app o en redes.', en: 'Share pieces or looks with friends, in-app or on social media.' },
        { es: 'Comprar productos sugeridos para completar looks.', en: 'Buy suggested products to complete looks.' },
        { es: 'Obtener códigos de descuento en distintas marcas.', en: 'Get discount codes from different brands.' },
      ],
    },
    {
      t: 'cols',
      items: [
        {
          title: { es: 'Punto de vista', en: 'Point of view' },
          es: 'Belén necesita una herramienta práctica que la ayude a optimizar el tiempo de selección de vestuario y que además le sirva para trabajar con sus clientas: mostrar combinaciones, recordar outfits pasados y agendar nuevos.',
          en: 'Belén needs a practical tool that helps her optimize the time she spends choosing outfits, and that also works for her clients: showing combinations, recalling past outfits and scheduling new ones.',
        },
        {
          title: { es: 'MVP', en: 'MVP' },
          es: 'Guardar fotos de toda la ropa. Combinar ropa. Conectar usuarios.',
          en: 'Save photos of all your clothes. Combine clothes. Connect users.',
        },
      ],
    },
    { t: 'fig', src: `${P}/benchmarking.jpg`, es: 'Benchmarking: Combyne, My Outfit y Closet+', en: 'Benchmarking: Combyne, My Outfit and Closet+', w: 'narrow' },
    {
      t: 'p',
      es: 'Cada app resolvía una parte —estética, organización o armado de equipaje—, pero ninguna reunía organización, combinaciones y una interfaz simple.',
      en: 'Each app solved one part — aesthetics, organization or travel packing — but none brought together organization, combinations and a simple interface.',
    },

    /* ---------- 02 · Definir ---------- */
    { t: 'h', n: '02', es: 'Definir', en: 'Define' },
    {
      t: 'p',
      es: 'Con un card sorting entendí cómo agrupan las funciones las personas usuarias, y eso ordenó la estructura de la app.',
      en: 'A card sorting study showed how people group the features, and that shaped the structure of the app.',
    },
    {
      t: 'stats',
      items: [
        { n: '90%', es: 'agrupó “Conectar con otros usuarios” con “Encuestas en historias”.', en: 'grouped “Connect with other users” with “Polls in stories”.' },
        { n: '80%', es: 'agrupó “Hacer combinaciones” con “Combinaciones guardadas”.', en: 'grouped “Make combinations” with “Saved combinations”.' },
      ],
    },
    { t: 'fig', src: `${P}/cardsorting.jpg`, es: 'Card sorting y matriz de similitud', en: 'Card sorting and similarity matrix', w: 'narrow' },
    { t: 'fig', src: `${P}/dendrograma.jpg`, es: 'Dendrograma', en: 'Dendrogram', w: 'wide' },
    {
      t: 'p',
      es: 'Después del benchmarking, el card sorting, las entrevistas y las pruebas, la arquitectura quedó en siete secciones: Buscar, Home, Ropero, Cámara, Social, Compras y Notificaciones.',
      en: 'After the benchmarking, card sorting, interviews and tests, the architecture settled into seven sections: Search, Home, Closet, Camera, Social, Shop and Notifications.',
    },
    { t: 'fig', src: `${P}/arquitectura.jpg`, es: 'Arquitectura de la información', en: 'Information architecture', w: 'wide' },
    { t: 'fig', src: `${P}/userflow.jpg`, es: 'User flow: combinación de prendas', en: 'User flow: combining garments', w: 'wide' },
    { t: 'fig', src: `${P}/taskflow.jpg`, es: 'Task flow: Belén comparte un look con una clienta', en: 'Task flow: Belén shares a look with a client', w: 'wide' },

    /* ---------- 03 · Prototipar ---------- */
    { t: 'h', n: '03', es: 'Prototipar', en: 'Prototype' },
    {
      t: 'p',
      es: 'Fui subiendo la fidelidad de a poco: del papel al wireframe digital, luego a media fidelidad y finalmente al prototipo en alta, con la identidad ya aplicada.',
      en: 'I raised the fidelity step by step: from paper to digital wireframes, then mid-fidelity and finally the high-fidelity prototype, with the identity applied.',
    },
    { t: 'fig', src: `${P}/proto-papel.jpg`, es: 'Prototipo en baja: papel', en: 'Low fidelity: paper', w: 'wide' },
    { t: 'fig', src: `${P}/proto-baja.jpg`, es: 'Prototipo en baja digital', en: 'Low fidelity: digital', w: 'wide' },
    { t: 'fig', src: `${P}/proto-media.jpg`, es: 'Prototipo en media fidelidad', en: 'Mid fidelity', w: 'wide' },
    { t: 'fig', src: `${P}/proto-alta.jpg`, es: 'Prototipo en alta fidelidad', en: 'High fidelity', w: 'wide' },
    { t: 'fig', src: `${P}/social.jpg`, es: 'Social: historias, chats, perfil y feed', en: 'Social: stories, chats, profile and feed', w: 'wide' },

    /* ---------- 04 · Validar ---------- */
    { t: 'h', n: '04', es: 'Validar', en: 'Validate' },
    {
      t: 'p',
      es: 'Probé el prototipo con cinco personas y medí qué tan sencillo les resultó cada tarea.',
      en: 'I tested the prototype with five people and measured how easy each task was for them.',
    },
    { t: 'fig', src: `${P}/usabilidad.jpg`, es: 'Pruebas de usabilidad: métricas de satisfacción (5 respuestas)', en: 'Usability tests: satisfaction metrics (5 responses)', w: 'wide' },
    {
      t: 'cols',
      items: [
        {
          title: { es: 'Lo que encontramos', en: 'What we found' },
          es: 'Sacar una foto, combinar y entrar al perfil resultaron fáciles. Compartir el look con amigos fue lo más difícil: el 80% lo calificó “más o menos” y un 20%, difícil.',
          en: 'Taking a photo, combining and opening the profile were easy. Sharing the look with friends was the hardest: 80% rated it “so-so” and 20% found it difficult.',
        },
        {
          title: { es: 'Lo que cambié', en: 'What I changed' },
          es: 'La función principal, sacar la foto de la prenda, pasó al centro de la tab bar. Y sumé el ícono de compartir en cada sección del ropero, en los chats, en las encuestas de historias y en el perfil.',
          en: 'The main function, photographing a garment, moved to the center of the tab bar. And I added a share icon to every closet section, the chats, the story polls and the profile.',
        },
      ],
    },

    /* ---------- 05 · Identidad ---------- */
    { t: 'break', kind: 'img', src: `${P}/textura.jpg`, alt: 'Tejido, lana y jean apilados junto a una ventana', w: 'narrow' },
    { t: 'h', n: '05', es: 'Identidad visual', en: 'Visual identity' },
    {
      t: 'p',
      es: 'La estética parte de la moda editorial: tonos cálidos, texturas de tela y una tipografía display de trazo elegante para el logo. Para la interfaz, Roboto, por su legibilidad.',
      en: 'The look comes from editorial fashion: warm tones, fabric textures and an elegant display typeface for the logo. For the interface, Roboto, for its legibility.',
    },
    { t: 'fig', src: `${P}/moodboard.jpg`, es: 'Moodboard', en: 'Moodboard', w: 'wide' },
    { t: 'fig', src: `${P}/logo.jpg`, es: 'Logo e ícono', en: 'Logo and icon', w: 'wide' },
    { t: 'fig', src: `${P}/uikit.jpg`, es: 'UI Kit: paleta, tipografías, inputs, botones, tab bar y cards', en: 'UI Kit: palette, typography, inputs, buttons, tab bar and cards', w: 'narrow' },
    { t: 'fig', src: `${P}/cierre.jpg`, es: 'Lookap, en perspectiva', en: 'Lookap, in perspective', w: 'wide' },
    {
      t: 'note',
      es: 'Tipografía del logo: Doppelganger, de Speak Design.',
      en: 'Logo typeface: Doppelganger, by Speak Design.',
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
