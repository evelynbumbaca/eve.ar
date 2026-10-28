# Herramientas Lookap (mockups con la app)

Scripts de Python (numpy + Pillow) y ffmpeg. Las rutas se pasan por argumento.

- `track_celu_video.py <video> <salida.json>`: sigue la pantalla del celu en el flat-lay con zoom (da `quad.json`).
- `mockup_video.py <dir> x <fondo.mp4> <salida.mp4> [zoom_max]`: pega la grabación de la app en el celu del fondo, cuadro a cuadro. Necesita `screen.raw` en `<dir>`: la grabación recortada (crop=404:850:38:18, rgb24, 564 frames a 30 fps).
- `mockup_imagen.py <dir> <dir_imagenes> [inset_px]`: pega capturas en las fotos (jean inclinado con homografía, flat-lay gris por luminancia). Usa `lines.npy` y `left.npy` (bordes del celu del jean).

Medidas: pantalla útil del mockup de la grabación x48-431, y28-858 (482x884); flat-lay gris x703-905, y781-1220.

## Premiere: grabación de la app dentro del celu de una imagen (pasos simples)
Preferido: mandar a Claude la imagen original y la grabación, y que lo arme por código (con esquinas redondeadas y zoom suave). Si se hace en Premiere:
1. Capas: grabación a V3 (libre), imagen a V1. La imagen abajo, la grabación arriba.
2. Estirar la imagen: arrastrar su borde derecho hasta el final de la grabación.
3. Efecto Recortar sobre la grabación: izquierda 10 %, derecha 10,4 %, superior 3,2 %, inferior 2,8 % (para la grabación de 482x884).
4. Controles de efectos > Movimiento: ajustar Escala y Posición hasta tapar justo la pantalla del celu (monitor al 200 %).
5. Clic derecho en la grabación > Velocidad/duración > 200 %.
6. Exportar: Ctrl+M, H.264, destildar Exportar audio.
Lo más trabajoso en Premiere: esquinas redondeadas y zoom suave (Anidar + keyframes de Escala con entrada/salida suaves).
