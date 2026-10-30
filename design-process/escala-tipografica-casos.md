# Escala tipográfica de los casos (eve.ar)

Definida en `src/pages/trabajos/[slug].astro` (variables `--t-*` dentro de `.case`).
Todo caso nuevo usa estas mismas variables; no inventar tamaños sueltos.

Base 17 px, razón ~1.25, fluida entre 360 y 1440 px. **Piso de 14 px** para cualquier texto legible
(solo el texto dibujado dentro de los teléfonos de ejemplo puede ser menor).

| Uso | Variable | Tamaño | Interlineado | Interletrado |
|---|---|---|---|---|
| Etiquetas, pies de figura, números | `--t-xs` | 14 px | 1.4 | +0.01em, Inter 500, sin mayúsculas |
| UI de esquemas (nodos, chips, tablas) | `--t-sm` | 14–15 px | 1.35–1.4 | 0 |
| Texto de tarjetas | `--t-body` | 16–17 px | 1.6 | 0 |
| Párrafo de sección (máx. 62ch) | `--t-p` | 17–19 px | 1.65 | 0 |
| Título de tarjeta | `--t-title` | 20–24 px | 1.25 | -0.005em |
| Introducción / lead | `--t-lead` | 22–30 px | 1.35 | -0.01em |
| Título de sección | `--t-h2` | 32–56 px | 1.1 | -0.02em |
| Título de portada | clamp(3rem, 1.8rem + 5.5vw, 6.5rem) | 48–104 px | 1.0 | -0.03em |
| Cifras grandes | `--t-num` / `--t-num-m` | 56–96 / 40–60 px | 0.9–1 | -0.03em |

Reglas: serif (Spectral) solo en títulos, lead y valores; Inter para texto corrido y etiquetas;
mono solo para numeración. Cuanto más grande el texto, menos interlineado y más cerrado el interletrado.
