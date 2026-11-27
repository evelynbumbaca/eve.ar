/* ============================================================
   Caso: PLANON — app que cruza el clima con planes para hacer.
   Los bloques se renderizan en src/pages/trabajos/[slug].astro
   ============================================================ */
import type { CaseContent } from './types';

const P = 'projects/planon';
const PROTO = 'https://www.figma.com/proto/I25wA24CPHxd3vePVhK5Vz/Prototipo-APP-PLANON-Evelyn-Bumbaca?scaling=scale-down';

export const planon: CaseContent = {
  /* colores del proyecto: lavanda de la investigación + verde salvia de la app */
  heroImage: `${P}/hero.jpg`,
  theme: { wine: '#4B4FA0', coral: '#6E9C3F', cream: '#F6F8EE', night: '#1E1F2E' },
  meta: {
    context: { es: 'Proyecto UX/UI · App', en: 'UX/UI project · App' },
    role: { es: 'Research · UX/UI · Arquitectura de la información · Prototipado · Identidad', en: 'Research · UX/UI · Information architecture · Prototyping · Identity' },
    tools: 'Figma · Illustrator · Photoshop · After Effects',
  },
  intro: {
    es: '¿Llueve y se te arruinaron los planes del finde? PLANON combina el pronóstico con ideas de qué hacer: salir si el día acompaña, o quedarte en casa con una película, una receta o un disco si no. La diseñé de punta a punta, del research al prototipo.',
    en: 'Rain ruined your weekend plans? PLANON pairs the forecast with ideas for what to do: go out when the day allows, or stay in with a film, a recipe or an album when it doesn’t. I designed it end to end, from research to prototype.',
  },
  blocks: [
    {
      t: 'os',
      items: [
        {
          label: { es: 'Problema', en: 'Problem' },
          es: 'En Argentina el clima cambia tanto que dependemos del pronóstico para salir o para armar el fin de semana. Ninguna app te dice qué hacer según el día, ni te da opciones para quedarte en casa.',
          en: 'In Argentina the weather changes so much that we rely on the forecast to go out or plan the weekend. No app tells you what to do based on the day, or gives you options for staying in.',
        },
        {
          label: { es: 'Objetivo', en: 'Objective' },
          es: 'Un servicio del clima que no solo informe el tiempo, sino que proponga qué hacer, priorizando actividades sustentables y saludables.',
          en: 'A weather service that doesn’t just report the forecast but suggests what to do, prioritizing sustainable and healthy activities.',
        },
        {
          label: { es: 'Solución', en: 'Solution' },
          es: 'Una app que cruza el pronóstico con tus gustos: planes al aire libre cuando el día acompaña, y películas, música, lecturas o recetas cuando no. Los guardás y los agendás en un calendario que ya trae el clima de cada día.',
          en: 'An app that crosses the forecast with your tastes: outdoor plans when the day allows, and films, music, books or recipes when it doesn’t. Save them and schedule them in a calendar that already shows each day’s weather.',
        },
      ],
    },
    {
      t: 'proto',
      title: { es: 'Probá el prototipo funcional', en: 'Try the working prototype' },
      veil: { es: 'Probá el prototipo', en: 'Try the prototype' },
      hint: { es: 'Pasá el mouse para usarlo', en: 'Hover to use it' },
      open: { es: 'Abrir en Figma', en: 'Open in Figma' },
      fallback: { es: '¿No carga? Abrilo directamente en Figma.', en: 'Not loading? Open it directly in Figma.' },
      url: PROTO,
    },
    {
      t: 'glance',
      items: [
        { n: '3', es: 'apps analizadas', en: 'apps analyzed' },
        { n: '2', es: 'user personas', en: 'user personas' },
        { n: '3', es: 'vistas del clima', en: 'weather views' },
        { n: '4', es: 'tipos de plan', en: 'kinds of plan' },
      ],
    },
    { t: 'video', src: `${P}/presentacion.mp4`, poster: `${P}/presentacion-poster.jpg`, sound: true, es: 'El logo: un interruptor que prende el plan', en: 'The logo: a switch that turns the plan on' },
    { t: 'video', src: `${P}/promo.mp4`, poster: `${P}/promo-poster.jpg`, sound: true, es: 'Spot de PLANON', en: 'PLANON spot' },
    {
      t: 'deck',
      es: 'App en contexto',
      en: 'App in context',
      items: [
        { src: `${P}/ctx-onboarding.jpg`, alt: 'PLANON: pantalla de bienvenida del onboarding', word: { es: 'Bienvenida', en: 'Welcome' } },
        { src: `${P}/ctx-home.jpg`, alt: 'PLANON: inicio con el clima del día y los planes sugeridos', word: { es: 'Clima', en: 'Weather' } },
        { src: `${P}/ctx-dos.jpg`, alt: 'PLANON: el inicio y el panel de una película', word: { es: 'Planes', en: 'Plans' } },
      ],
    },

    /* ---------- 01 · Research ---------- */
    { t: 'h', n: '01', es: 'Research', en: 'Research' },
    {
      t: 'p',
      es: 'Arranqué mirando qué ya existía. Hay apps de clima muy completas y apps para armar planes, pero ninguna cruza las dos cosas, y la mayoría están solo en inglés.',
      en: 'I started by looking at what already existed. There are very complete weather apps and apps for making plans, but none brings the two together, and most are English-only.',
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
          name: 'WeatherBug',
          vals: [
            { es: 'Estéticamente equilibrada, textos simples y buena usabilidad.', en: 'Visually balanced, simple copy and good usability.' },
            { es: 'Casi no dice qué se puede hacer con cada clima.', en: 'Says almost nothing about what to do in each weather.' },
          ],
        },
        {
          name: 'Weather Underground',
          vals: [
            { es: 'La información del clima es muy completa.', en: 'The weather information is very complete.' },
            { es: 'Estética seria, solo en inglés, y avisarte cuándo el día es apto para salir es pago.', en: 'Serious look, English-only, and telling you when the day is good for going out is paid.' },
          ],
        },
        {
          name: 'WeekFlash',
          vals: [
            { es: 'Cumple lo que promete: ver qué planes tienen tus amigos.', en: 'Delivers what it promises: seeing what your friends are up to.' },
            { es: 'Diseño poco atractivo; no contempla leer, cocinar o escuchar música, y no tiene en cuenta el clima.', en: 'Unappealing design; leaves out reading, cooking or music, and ignores the weather.' },
          ],
        },
      ],
    },
    {
      t: 'personas',
      lead: { es: 'User personas', en: 'User personas' },
      labels: {
        why: { es: '¿Qué busca?', en: 'What is he/she after?' },
        motivation: { es: 'Motivaciones', en: 'Motivations' },
        frustration: { es: 'Frustraciones', en: 'Frustrations' },
      },
      items: [
        {
          name: 'Daniel',
          photo: `${P}/persona-daniel.jpg`,
          tone: 'wine',
          role: { es: 'Administrativo y psicólogo', en: 'Office worker and psychologist' },
          meta: { es: '33 años · CABA · Soltero', en: '33 · Buenos Aires · Single' },
          why: { es: 'Encontrar fácil qué hacer según el clima, con propuestas nuevas para salir al aire libre o para quedarse en casa.', en: 'Easily finding what to do based on the weather, with fresh ideas for going out or staying in.' },
          motivation: { es: 'Hacer actividades al aire libre, conocer lugares nuevos de la ciudad y cocinar recetas gourmet.', en: 'Outdoor activities, discovering new places in the city and cooking gourmet recipes.' },
          frustration: { es: 'Las apps con demasiadas opciones y botones, y perder tiempo buscando sin encontrar buenas ideas.', en: 'Apps with too many options and buttons, and wasting time searching without finding good ideas.' },
        },
        {
          name: 'Martina',
          photo: `${P}/persona-martina.jpg`,
          tone: 'coral',
          role: { es: 'Estudiante de formación inicial', en: 'Early-education student' },
          meta: { es: '18 años · San Fernando · Soltera', en: '18 · San Fernando · Single' },
          why: { es: 'Recibir recomendaciones de libros y actividades según su ánimo, sin tener que buscarlas por todos lados.', en: 'Getting book and activity recommendations based on her mood, without searching everywhere.' },
          motivation: { es: 'Tachar los libros de su lista, aprovechar el fin de semana y pasar tiempo con su familia.', en: 'Crossing books off her list, making the most of the weekend and spending time with family.' },
          frustration: { es: 'Que le recomienden títulos en inglés y que se le pase el día buscando qué leer.', en: 'Being recommended English titles and losing the day looking for something to read.' },
        },
      ],
    },
    {
      t: 'p',
      es: 'En entrevistas a potenciales usuarios apareció lo mismo: el clima decide el plan, y cuando el plan se cae, el día se pierde buscando qué hacer. Con un card sorting entendí cómo agrupaban las funciones; además, el 60% juntó los planes sugeridos del día con los guardados.',
      en: 'Interviews with potential users showed the same thing: the weather decides the plan, and when the plan falls through, the day is lost looking for something to do. A card sorting study showed how they grouped the features; 60% also paired today’s suggested plans with the saved ones.',
    },
    {
      t: 'stats',
      items: [
        {
          n: '100%',
          a: { es: 'Agregar plan al calendario', en: 'Add plan to calendar' },
          b: { es: 'Quitar plan del calendario', en: 'Remove plan from calendar' },
          es: 'de las personas agrupó estas dos funciones.',
          en: 'of people grouped these two features together.',
        },
        {
          n: '70%',
          a: { es: 'Planes guardados', en: 'Saved plans' },
          b: { es: 'Filtros de búsqueda', en: 'Search filters' },
          es: 'de las personas agrupó estas dos funciones.',
          en: 'of people grouped these two features together.',
        },
      ],
    },
    {
      t: 'features',
      lead: { es: 'Lo que debe tener la app', en: 'What the app should have' },
      title: { es: 'MVP', en: 'MVP' },
      items: [
        { es: 'Sugerir planes según el clima y tus gustos', en: 'Suggest plans based on the weather and your tastes' },
        { es: 'Mostrar el pronóstico extendido', en: 'Show the extended forecast' },
        { es: 'Guardar planes', en: 'Save plans' },
        { es: 'Agendar planes', en: 'Schedule plans' },
        { es: 'Borrar planes', en: 'Delete plans' },
        { es: 'Buscar por ciudad', en: 'Search by city' },
        { es: 'Avisos de alertas meteorológicas y planes agendados', en: 'Weather alerts and scheduled-plan notifications' },
      ],
      mvpTitle: { es: 'Prioridad', en: 'Priority' },
      mvp: [
        { es: 'Clima + planes sugeridos en el inicio', en: 'Weather + suggested plans on the home screen' },
        { es: 'Calendario con el clima de cada día', en: 'Calendar with each day’s weather' },
        { es: 'Pocos pasos y en español', en: 'Few steps, in Spanish' },
      ],
    },

    /* ---------- 02 · Estructura ---------- */
    { t: 'h', n: '02', es: 'Estructura', en: 'Structure' },
    {
      t: 'sitemap',
      es: 'Arquitectura de la información',
      en: 'Information architecture',
      root: 'PLANON',
      rootLogo: `${P}/logo.svg`,
      branches: [
        { title: { es: 'Clima', en: 'Weather' }, kids: [{ es: 'Clima actual', en: 'Current' }, { es: 'Por hora', en: 'Hourly' }, { es: 'Por día', en: 'Daily' }, { es: 'Buscar por lugar', en: 'Search by place' }] },
        {
          title: { es: 'Planes', en: 'Plans' },
          kids: [
            { es: 'Para escuchar', en: 'To listen', kids: [{ es: 'Ir a escuchar', en: 'Go listen' }] },
            { es: 'Para hacer', en: 'To do', kids: [{ es: 'Ver detalles', en: 'See details', kids: [{ es: 'Más info en un sitio externo', en: 'More info on an external site' }] }] },
          ],
        },
        { title: { es: 'Guardados', en: 'Saved' }, kids: [{ es: 'Planes guardados', en: 'Saved plans' }, { es: 'Buscar planes', en: 'Search plans', kids: [{ es: 'Filtrar por categoría', en: 'Filter by category' }] }] },
        {
          title: { es: 'Agenda', en: 'Calendar' },
          kids: [
            { es: 'Mes con pronóstico', en: 'Month with forecast', kids: [{ es: 'Buscar por ciudad', en: 'Search by city' }] },
            { es: 'Planes agendados', en: 'Scheduled plans', kids: [{ es: 'Agregar un plan', en: 'Add a plan' }] },
          ],
        },
        { title: { es: 'Avisos', en: 'Alerts' }, kids: [{ es: 'Alertas del clima', en: 'Weather alerts' }, { es: 'Planes agendados', en: 'Scheduled plans' }] },
        { title: { es: 'Ajustes', en: 'Settings' }, kids: [{ es: 'Perfil', en: 'Profile' }, { es: 'Preferencias', en: 'Preferences' }, { es: 'Código QR', en: 'QR code' }, { es: 'Cerrar sesión', en: 'Log out' }] },
      ],
    },
    {
      t: 'p',
      es: 'Después tracé el recorrido más típico: un día de lluvia, alguien abre la app y en cinco pasos ya está cocinando.',
      en: 'Then I mapped the most typical journey: on a rainy day, someone opens the app and five steps later they’re cooking.',
    },
    {
      t: 'steps',
      es: 'Task flow · día de lluvia',
      en: 'Task flow · rainy day',
      items: [
        { es: 'Entra a la app', en: 'Opens the app' },
        { es: 'Mira el clima por hora', en: 'Checks the hourly weather' },
        { es: 'Ve los planes sugeridos', en: 'Sees the suggested plans' },
        { es: 'Elige la receta de waffles', en: 'Picks the waffle recipe' },
        { es: 'Toca “Ver receta” y cocina', en: 'Taps “See recipe” and cooks' },
      ],
    },

    /* ---------- 03 · Identidad ---------- */
    { t: 'h', n: '03', es: 'Identidad', en: 'Identity' },
    {
      t: 'p',
      es: 'El nombre lo dice: un plan que se prende. La “O” de ON es un interruptor que pasa de apagado a encendido, la misma animación que abre la app. El tono, divertido, vintage y redondeado, sale del moodboard: verde salvia de base, lavanda para las acciones, y celeste y naranja para el clima.',
      en: 'The name says it: a plan that switches on. The “O” in ON is a toggle going from off to on, the same animation that opens the app. The tone, playful, vintage and rounded, comes from the moodboard: sage green as the base, lavender for actions, and light blue and orange for the weather.',
    },
    {
      t: 'brand',
      es: 'Logo, ícono, color y tipografía de la interfaz',
      en: 'Logo, icon, color and interface typography',
      logo: `${P}/logo.svg`,
      icon: `${P}/icono.svg`,
      iconPlain: true,
      fontCss: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;700&display=swap',
      swatches: [
        { name: { es: 'Salvia', en: 'Sage' }, tone: 'sage', hex: '#BCDC92', bg: '#BCDC92', fg: '#1E1E1E' },
        { name: { es: 'Lavanda', en: 'Lavender' }, tone: 'lav', hex: '#B7BCE3', bg: '#B7BCE3', fg: '#1E1E1E' },
        { name: { es: 'Celeste', en: 'Sky' }, tone: 'sky', hex: '#A8E7EF', bg: '#A8E7EF', fg: '#1E1E1E' },
        { name: { es: 'Naranja', en: 'Orange' }, tone: 'orange', hex: '#FC9347', bg: '#FC9347', fg: '#1E1E1E' },
      ],
      labels: {
        logo: { es: 'Logo', en: 'Logo' },
        icon: { es: 'Ícono de app', en: 'App icon' },
        palette: { es: 'Paleta', en: 'Palette' },
        type: { es: 'Tipografía', en: 'Typography' },
      },
      font: {
        name: 'Montserrat Alternates',
        specs: [
          { es: 'Título 1', en: 'Heading 1', size: 35, weight: 700 },
          { es: 'Botón', en: 'Button', size: 18, weight: 500 },
          { es: 'Título 2', en: 'Heading 2', size: 16, weight: 500 },
          { es: 'Texto', en: 'Body', size: 14, weight: 400 },
        ],
      },
    },
    {
      t: 'p',
      es: 'Cada tipo de plan tiene su color y su acción: verde para llegar a un museo, celeste para sacar la entrada de un festival, rojo para ver una película y amarillo para abrir una receta.',
      en: 'Each kind of plan has its own color and action: green to get to a museum, light blue to buy festival tickets, red to watch a film and yellow to open a recipe.',
    },
    { t: 'fig', src: `${P}/ui-kit.jpg`, w: 'board', es: 'UI kit · cards de planes, plan musical y botones por categoría', en: 'UI kit · plan cards, music plan and category buttons' },

    /* ---------- 04 · Pantallas ---------- */
    { t: 'break', kind: 'img', src: `${P}/en-casa.jpg`, alt: 'Una chica sentada en un puf verde junto a la ventana mira PLANON en el celular, con la tele apagada enfrente' },
    { t: 'h', n: '04', es: 'Pantallas', en: 'Screens' },
    {
      t: 'p',
      es: 'El onboarding presenta la idea en tres pasos y termina con tres preguntas, música, salidas y comida, para que las sugerencias sean tuyas desde el primer día.',
      en: 'The onboarding presents the idea in three steps and ends with three questions, music, outings and food, so the suggestions are yours from day one.',
    },
    {
      t: 'gallery',
      es: 'Onboarding',
      en: 'Onboarding',
      r: '428 / 926',
      items: [
        { src: `${P}/onb-1.jpg`, alt: 'Onboarding 1: PLANON se basa en tus favoritos para sugerirte planes' },
        { src: `${P}/onb-2.jpg`, alt: 'Onboarding 2: si el clima se pone feo, te contamos qué podés hacer' },
        { src: `${P}/onb-3.jpg`, alt: 'Onboarding 3: guardá y agendá los planes que más te copen' },
        { src: `${P}/onb-preguntas.jpg`, alt: 'Preguntas de gustos: música, salida y comida favoritas' },
      ],
    },
    {
      t: 'p',
      es: 'En el inicio, el clima y los planes conviven en una sola pantalla. Tres pestañas cambian la vista del pronóstico, hoy, por hora o por día, y debajo siempre están las sugerencias para escuchar y para hacer.',
      en: 'On the home screen, the weather and the plans live together. Three tabs switch the forecast view, today, hourly or daily, and the suggestions to listen to and to do are always right below.',
    },
    {
      t: 'gallery',
      es: 'Inicio · Hoy, Hora y Día',
      en: 'Home · Today, Hourly and Daily',
      r: '428 / 926',
      items: [
        { src: `${P}/home-hoy.jpg`, alt: 'Inicio en la vista Hoy: clima actual y planes sugeridos' },
        { src: `${P}/home-hora.jpg`, alt: 'Inicio en la vista Hora: pronóstico hora por hora' },
        { src: `${P}/home-dia.jpg`, alt: 'Inicio en la vista Día: pronóstico de la semana' },
      ],
    },
    {
      t: 'gallery',
      es: 'Panel de cada plan · museo, festival, película y receta',
      en: 'Plan panel · museum, festival, film and recipe',
      r: '428 / 926',
      items: [
        { src: `${P}/panel-malba.jpg`, alt: 'Panel del Museo Malba con el botón Cómo llegar' },
        { src: `${P}/panel-lolla.jpg`, alt: 'Panel de Lollapalooza con el botón Sacar entrada' },
        { src: `${P}/panel-her.jpg`, alt: 'Panel de la película Her con el botón Dónde ver' },
        { src: `${P}/panel-waffles.jpg`, alt: 'Panel de la receta de waffles con el botón Ver receta' },
      ],
    },
    { t: 'video', src: `${P}/en-casa.mp4`, poster: `${P}/en-casa.jpg`, es: 'PLANON en uso · el plan de hoy: una peli en casa', en: 'PLANON in use · today’s plan: a movie at home' },
    {
      t: 'p',
      es: 'La agenda muestra el pronóstico de cada día del mes, así elegís cuándo hacer cada plan. Desde ahí también podés sumar uno propio.',
      en: 'The calendar shows the forecast for every day of the month, so you can choose when to do each plan. You can also add your own from there.',
    },
    { t: 'fig', src: `${P}/calendario.jpg`, w: 'board', es: 'Agenda con el clima de cada día y nuevo evento', en: 'Calendar with each day’s weather and new event' },

    /* ---------- 05 · Prototipo ---------- */
    { t: 'h', n: '05', es: 'Prototipo', en: 'Prototype' },
    {
      t: 'p',
      es: 'Arranqué con wireframes en baja para ordenar la jerarquía, el clima arriba y los planes abajo, y recién después sumé la identidad. Cada pantalla mantiene la estructura del boceto.',
      en: 'I started with low-fidelity wireframes to set the hierarchy, weather on top and plans below, and only then added the identity. Every screen keeps the structure of the sketch.',
    },
    { t: 'fig', src: `${P}/baja-alta.jpg`, w: 'board', es: 'De baja a alta fidelidad', en: 'From low to high fidelity' },
    {
      t: 'links',
      items: [
        { es: 'Abrir el prototipo en Figma', en: 'Open the prototype in Figma', href: PROTO },
      ],
    },
  ],
};
