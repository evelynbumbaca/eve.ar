# Herramientas Lookap (mockups con la app)

Scripts de Python (numpy + Pillow) y ffmpeg. Las rutas se pasan por argumento.

- `track_celu_video.py <video> <salida.json>`: sigue la pantalla del celu en el flat-lay con zoom (da `quad.json`).
- `mockup_video.py <dir> x <fondo.mp4> <salida.mp4> [zoom_max]`: pega la grabación de la app en el celu del fondo, cuadro a cuadro. Necesita `screen.raw` en `<dir>`: la grabación recortada (crop=404:850:38:18, rgb24, 564 frames a 30 fps).
- `mockup_imagen.py <dir> <dir_imagenes> [inset_px]`: pega capturas en las fotos (jean inclinado con homografía, flat-lay gris por luminancia). Usa `lines.npy` y `left.npy` (bordes del celu del jean).

Medidas: pantalla útil del mockup de la grabación x48-431, y28-858 (482x884); flat-lay gris x703-905, y781-1220.
