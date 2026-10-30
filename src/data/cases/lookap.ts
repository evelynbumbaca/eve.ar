/* ============================================================
   Caso: Lookap — contenido real, bilingüe.
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/lookap';

export const lookap: CaseContent = {
  /* colores del proyecto (UI kit de Lookap) */
  heroImage: `${P}/mockup-jeans.jpg`,
  theme: { wine: '#a92f3c', coral: '#ce6c3f', cream: '#fff9ed', night: '#1f0a0e' },
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
      t: 'proto',
      title: { es: 'Probá el prototipo funcional', en: 'Try the working prototype' },
      open: { es: 'Abrir en Figma', en: 'Open in Figma' },
      fallback: { es: '¿No carga? Abrilo directamente en Figma.', en: 'Not loading? Open it directly in Figma.' },
      url: 'https://www.figma.com/proto/tmesKsrV5FW1vJ73ifa5jv/Atomic-Grilla-y-Layout-Evelyn-Bumbaca?page-id=0%3A1&node-id=183%3A2990&viewport=-2764%2C-2466%2C0.5108493566513062&scaling=scale-down',
    },
    {
      t: 'glance',
      items: [
        { n: '3', es: 'apps analizadas', en: 'apps analyzed' },
        { n: '7', es: 'secciones en la app', en: 'sections in the app' },
        { n: '4', es: 'niveles de fidelidad', en: 'levels of fidelity' },
        { n: '5', es: 'personas en las pruebas', en: 'people in the tests' },
      ],
    },
    { t: 'video', src: `${P}/app-en-uso.mp4`, es: 'La app en uso', en: 'The app in use' },
    {
      t: 'gallery',
      es: 'La app en contexto',
      en: 'The app in context',
      items: [
        { src: `${P}/ctx-armario.jpg`, alt: 'Lookap: pantalla de ingreso frente a un placard' },
        { src: `${P}/ctx-flatlay.jpg`, alt: 'Lookap: combinación guardada junto a la ropa' },
      ],
    },

    /* ---------- 01 · Research ---------- */
    { t: 'break', kind: 'video', src: `${P}/percha.mp4`, alt: 'Percha en un perchero, luz natural' },
    { t: 'h', n: '01', es: 'Research', en: 'Research' },
    {
      t: 'p',
      es: 'Empecé por las personas. Dos arquetipos marcaron las necesidades: ahorrar tiempo al vestirse y poder mostrar, recordar y compartir looks.',
      en: 'I started with people. Two archetypes set the needs: save time when getting dressed, and be able to show, recall and share looks.',
    },
    {
      t: 'personas',
      labels: {
        why: { es: '¿Por qué este usuario?', en: 'Why this user?' },
        motivation: { es: 'Motivaciones', en: 'Motivations' },
        frustration: { es: 'Frustraciones', en: 'Frustrations' },
      },
      items: [
        {
          name: 'Camila',
          photo: `${P}/persona-camila.jpg`,
          tone: 'coral',
          role: { es: 'Administrativa', en: 'Office worker' },
          meta: { es: '28 años · Vicente López · Soltera', en: '28 · Vicente López · Single' },
          why: { es: 'Está abierta a nuevas experiencias, tiene sentido de la moda y poco espacio en su placard.', en: 'She is open to new experiences, has a sense of fashion and little closet space.' },
          motivation: { es: 'Viajar por el mundo y conocer la cultura y la moda de cada lugar.', en: 'Traveling the world and discovering the culture and fashion of each place.' },
          frustration: { es: 'Tiene tan poco espacio que siempre sacrifica ropa y nunca sabe qué dejar o qué regalar.', en: 'She has so little space that she always sacrifices clothes and never knows what to keep or give away.' },
        },
        {
          name: 'Belén',
          photo: `${P}/persona-belen.jpg`,
          tone: 'wine',
          role: { es: 'Asesora de imagen', en: 'Image consultant' },
          meta: { es: '40 años · Córdoba · Casada · 2 hijos', en: '40 · Córdoba · Married · 2 kids' },
          why: { es: 'Necesita optimizar el tiempo de elegir su vestuario, organizar su vestidor y compartirlo con sus clientes. Algo fácil de usar.', en: 'She needs to optimize the time she spends choosing outfits, organize her wardrobe and share it with her clients. Something easy to use.' },
          motivation: { es: 'Su profesión la apasiona y sus hijos la motivan a cumplir sus metas. Siempre busca las últimas tendencias.', en: 'She loves her profession and her kids motivate her to reach her goals. She is always after the latest trends.' },
          frustration: { es: 'Odia tener poco tiempo para elegir qué ponerse o repetir dos looks en una semana.', en: 'She hates having little time to decide what to wear, or repeating two looks in one week.' },
        },
      ],
    },
    {
      t: 'features',
      title: { es: 'Funcionalidades', en: 'Features' },
      items: [
        { es: 'Sacar fotos a las prendas y hacer combinaciones', en: 'Photograph garments and build combinations' },
        { es: 'Organizar por estilo, color, estación y categorías propias', en: 'Organize by style, color, season and custom categories' },
        { es: 'Guardar fotos de los looks', en: 'Save photos of your looks' },
        { es: 'Encuestas rápidas en historias', en: 'Quick polls in stories' },
        { es: 'Compartir prendas o looks con amigos o en redes', en: 'Share pieces or looks with friends or on social media' },
        { es: 'Comprar productos sugeridos para completar looks', en: 'Buy suggested products to complete looks' },
        { es: 'Obtener códigos de descuento de distintas marcas', en: 'Get discount codes from different brands' },
      ],
      mvpTitle: { es: 'MVP', en: 'MVP' },
      mvp: [
        { es: 'Guardar fotos de toda tu ropa', en: 'Save photos of all your clothes' },
        { es: 'Combinar ropa', en: 'Combine clothes' },
        { es: 'Conectar usuarios', en: 'Connect users' },
      ],
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
        {
          n: '90%',
          a: { es: 'Conectar con otros usuarios', en: 'Connect with other users' },
          b: { es: 'Encuestas en historias', en: 'Polls in stories' },
          es: 'de las personas agrupó estas dos funciones.',
          en: 'of people grouped these two features together.',
        },
        {
          n: '80%',
          a: { es: 'Hacer combinaciones', en: 'Make combinations' },
          b: { es: 'Combinaciones guardadas', en: 'Saved combinations' },
          es: 'de las personas agrupó estas dos funciones.',
          en: 'of people grouped these two features together.',
        },
      ],
    },

    /* ---------- 02 · Estructura ---------- */
    { t: 'h', n: '02', es: 'Estructura', en: 'Structure' },
    {
      t: 'sitemap',
      es: 'Arquitectura de la información',
      en: 'Information architecture',
      root: 'Lookap',
      rootLogo: `${P}/logo-lookap.png`,
      branches: [
        { title: { es: 'Buscar', en: 'Search' }, kids: [{ es: 'Buscar prendas', en: 'Search garments' }, { es: 'Filtros', en: 'Filters' }] },
        { title: { es: 'Home', en: 'Home' }, kids: [{ es: 'Favoritos', en: 'Favorites' }, { es: 'Looks favoritos', en: 'Favorite looks' }, { es: 'Prendas favoritas', en: 'Favorite garments' }] },
        {
          title: { es: 'Ropero', en: 'Closet' },
          kids: [
            { es: 'Organizar ropa', en: 'Organize clothes' },
            { es: 'Looks', en: 'Looks' },
            {
              es: 'Combinaciones',
              en: 'Combinations',
              kids: [
                {
                  es: 'Hacer combinaciones',
                  en: 'Make combinations',
                  kids: [
                    { es: 'Compartir en historias', en: 'Share in stories' },
                    { es: 'Compartir con amigos', en: 'Share with friends' },
                    { es: 'Compartir en otras redes', en: 'Share on other networks' },
                  ],
                },
                { es: 'Combinaciones guardadas', en: 'Saved combinations' },
              ],
            },
          ],
        },
        { title: { es: 'Cámara', en: 'Camera' }, kids: [{ es: 'Guardar prenda en el ropero', en: 'Save garment to closet' }] },
        {
          title: { es: 'Social', en: 'Social' },
          kids: [
            { es: 'Feed de amigos', en: 'Friends feed' },
            { es: 'Encuestas en historias', en: 'Polls in stories' },
            { es: 'Perfil', en: 'Profile', kids: [{ es: 'Configuración', en: 'Settings' }] },
          ],
        },
        { title: { es: 'Compras', en: 'Shop' }, kids: [{ es: 'Carrito de compras', en: 'Shopping cart' }, { es: 'Códigos de descuento', en: 'Discount codes' }] },
        { title: { es: 'Notificaciones', en: 'Notifications' }, kids: [] },
      ],
    },
    {
      t: 'p',
      es: 'Después, tracé el camino de Belén. Es asesora de imagen y quiere compartir un look con una clienta; tiene poco tiempo, así que el recorrido tiene que ser corto y claro.',
      en: 'Then I mapped Belén’s path. She is an image consultant and wants to share a look with a client; she has little time, so the journey has to be short and clear.',
    },
    {
      t: 'steps',
      es: 'Task flow de Belén',
      en: 'Belén’s task flow',
      items: [
        { es: 'Ingresa a la app', en: 'Opens the app' },
        { es: 'Entra al ropero', en: 'Goes to the closet' },
        { es: 'Abre combinaciones', en: 'Opens combinations' },
        { es: 'Arma el look', en: 'Builds the look' },
        { es: 'Lo comparte con su clienta', en: 'Shares it with her client' },
      ],
    },

    /* ---------- 03 · Prototipo y pruebas ---------- */
    { t: 'h', n: '03', es: 'Prototipo', en: 'Prototype' },
    {
      t: 'p',
      es: 'Fui subiendo la fidelidad de a poco. Esta es la pantalla de ingreso en cada etapa, del boceto en papel al prototipo con la identidad aplicada.',
      en: 'I raised the fidelity step by step. This is the login screen at each stage, from the paper sketch to the prototype with the identity applied.',
    },
    {
      t: 'fidelity',
      es: 'Cuatro niveles de fidelidad · pantalla de ingreso',
      en: 'Four levels of fidelity · login screen',
      logo: `${P}/logo-lookap.png`,
      items: [
        { kind: 'sketch', title: { es: 'Papel', en: 'Paper' }, text: { es: 'Bocetos a mano de las pantallas clave.', en: 'Hand sketches of the key screens.' } },
        { kind: 'wire', title: { es: 'Baja digital', en: 'Low digital' }, text: { es: 'Wireframes: estructura y jerarquía.', en: 'Wireframes: structure and hierarchy.' } },
        { kind: 'mid', title: { es: 'Media', en: 'Mid' }, text: { es: 'Navegación y etiquetas, todavía en grises.', en: 'Navigation and labels, still in grey.' } },
        { kind: 'hi', shot: `${P}/login-alta.jpg`, title: { es: 'Alta', en: 'High' }, text: { es: 'Identidad aplicada y prototipo interactivo.', en: 'Identity applied and interactive prototype.' } },
      ],
    },
    { t: 'h', n: '04', es: 'Pruebas', en: 'Testing' },
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
        { q: { es: 'Compartir el look con amigos', en: 'Sharing the look with friends' }, hot: true, why: { es: 'Fue la tarea que más costó: 80% la calificó “más o menos” y nadie la sintió fácil.', en: 'It was the hardest task: 80% rated it “so-so” and nobody found it easy.' }, parts: [{ key: 'c', pct: 80 }, { key: 'd', pct: 20 }] },
        { q: { es: 'Ir al perfil', en: 'Going to the profile' }, parts: [{ key: 'a', pct: 60 }, { key: 'b', pct: 20 }, { key: 'c', pct: 20 }] },
      ],
    },
    {
      t: 'metrics',
      es: 'Tareas de las pruebas · promedio de quienes las completaron',
      en: 'Test tasks · average of those who completed them',
      hotTag: { es: 'Punto crítico', en: 'Critical point' },
      note: { es: 'Compartir el look fue la tarea más difícil: solo 1 de 5 personas la completó sin dudas, 3 la completaron a medias y 1 no pudo hacerla.', en: 'Sharing the look was the hardest task: only 1 of 5 people completed it cleanly, 3 half-completed it and 1 could not do it.' },
      heads: {
        task: { es: 'Tarea', en: 'Task' },
        done: { es: 'La completaron', en: 'Completed it' },
        time: { es: 'Tiempo', en: 'Time' },
        steps: { es: 'Pasos', en: 'Steps' },
      },
      rows: [
        { task: { es: 'Sacar una foto', en: 'Take a photo' }, done: 4, time: '24 s', steps: '8' },
        { task: { es: 'Hacer una combinación', en: 'Make a combination' }, done: 5, time: '25 s', steps: '8' },
        { task: { es: 'Compartir el look', en: 'Share the look' }, done: 2.5, time: '48 s', steps: '12', hot: true, why: { es: 'Casi el doble de pasos que las demás.', en: 'Almost twice the steps of the others.' } },
        { task: { es: 'Ir al perfil', en: 'Go to the profile' }, done: 5, time: '11 s', steps: '3' },
      ],
    },
    {
      t: 'finding',
      found: {
        title: { es: 'Lo que encontré', en: 'What I found' },
        n: '80%',
        es: 'calificó “más o menos” compartir el look con amigos. Sacar la foto, combinar y entrar al perfil resultaron fáciles.',
        en: 'rated sharing the look with friends “so-so”. Taking the photo, combining and opening the profile were easy.',
      },
      changed: {
        title: { es: 'Lo que cambié', en: 'What I changed' },
        items: [
          { from: { es: 'Sacar la foto', en: 'Taking the photo' }, to: { es: 'pasó al centro de la tab bar, por ser la función principal.', en: 'moved to the center of the tab bar, as the main function.' } },
          { from: { es: 'Compartir', en: 'Sharing' }, to: { es: 'sumó su ícono en cada sección del ropero, los chats, las encuestas y el perfil.', en: 'got its icon in every closet section, the chats, the polls and the profile.' } },
        ],
      },
    },

    /* ---------- 04 · Identidad ---------- */
    { t: 'h', n: '05', es: 'Identidad', en: 'Identity' },
    {
      t: 'split',
      src: `${P}/textura.jpg`,
      alt: 'Tejido, lana y jean apilados junto a una ventana',
      es: 'La estética de Lookap parte de la moda editorial: tonos cálidos y texturas de tela como la lana, el algodón y el jean. Un logo con una tipografía display de trazo elegante, y una interfaz limpia en Roboto para que la ropa sea la protagonista.',
      en: 'Lookap’s look comes from editorial fashion: warm tones and fabric textures like wool, cotton and denim. A logo set in an elegant display typeface, and a clean Roboto interface so the clothes are the stars.',
    },
    {
      t: 'brand',
      es: 'Logo, color y tipografía de la interfaz',
      en: 'Logo, color and interface typography',
      logo: `${P}/logo-lookap.png`,
      icon: `${P}/icono-lookap.png`,
      swatches: [
        { name: { es: 'Primario', en: 'Primary' }, tone: 'coral', hex: '#CE6C3F' },
        { name: { es: 'Secundario', en: 'Secondary' }, tone: 'cream', hex: '#FFF9ED' },
        { name: { es: 'Acento', en: 'Accent' }, tone: 'wine', hex: '#A92F3C' },
      ],
      labels: {
        logo: { es: 'Logo', en: 'Logo' },
        icon: { es: 'Ícono', en: 'Icon' },
        palette: { es: 'Paleta', en: 'Palette' },
        type: { es: 'Tipografía', en: 'Typography' },
      },
      font: {
        name: 'Roboto',
        specs: [
          { es: 'Título 1', en: 'Heading 1', size: 20, weight: 500 },
          { es: 'Título 2', en: 'Heading 2', size: 18, weight: 500 },
          { es: 'Título 3', en: 'Heading 3', size: 14, weight: 500 },
          { es: 'Botón', en: 'Button', size: 16, weight: 700 },
        ],
      },
    },
    { t: 'h', n: '06', es: 'Aprendizajes', en: 'Takeaways' },
    {
      t: 'os',
      items: [
        {
          label: { es: 'Probar temprano', en: 'Test early' },
          es: 'Con solo cinco personas apareció el punto crítico: compartir el look. Detectarlo a tiempo evitó rediseñar después.',
          en: 'With just five people the critical point showed up: sharing the look. Catching it early avoided a redesign later.',
        },
        {
          label: { es: 'La función principal, al centro', en: 'Main function, front and center' },
          es: 'Sacar la foto de la prenda define la app, así que pasó al centro de la tab bar, donde se la espera.',
          en: 'Taking the garment photo defines the app, so it moved to the center of the tab bar, where people expect it.',
        },
        {
          label: { es: 'Ordenar antes de dibujar', en: 'Organize before drawing' },
          es: 'El benchmarking y el card sorting fijaron las secciones antes de diseñar una sola pantalla.',
          en: 'Benchmarking and card sorting set the sections before a single screen was designed.',
        },
      ],
    },
    {
      t: 'links',
      items: [
        {
          es: 'Ver el caso en Behance',
          en: 'See the case on Behance',
          href: 'https://www.behance.net/gallery/121073817/Lookap-UX-UI-Design',
        },
      ],
    },
  ],
};
