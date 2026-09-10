# Portafolio — Angelica Navarrete

Sitio de una sola página construido en HTML, CSS y JavaScript puro (sin frameworks ni proceso de build), listo para publicarse en GitHub Pages de forma gratuita.

## Archivos

- `index.html` — estructura y contenido del sitio
- `style.css` — estilos (paleta, tipografía, layout)
- `script.js` — resalta la sección activa en el menú al hacer scroll

## Antes de publicar: personaliza tu contenido

Busca estos marcadores de posición y reemplázalos con tu información real:

1. **Proyectos** (sección `Proyectos` en `index.html`): reemplaza los tres proyectos de ejemplo con tus entregables reales del bootcamp. Cada `<article class="project-card">` tiene un título, descripción, etiquetas de tecnología y un enlace `href="#"` que debes apuntar a tu repositorio real.
2. **Enlaces de contacto** (sección `Contacto`): reemplaza las URLs de LinkedIn y GitHub con las tuyas.
3. **Fechas exactas** en la sección `Trayectoria`: ajusta los años si no son exactamente los que puse.
4. Si más adelante quieres agregar fotos de proyectos, puedes colocarlas en una carpeta `images/` y referenciarlas desde `index.html`.

## Cómo publicarlo en GitHub Pages (paso a paso)

### 1. Crea una cuenta en GitHub (si no tienes una)
Ve a [github.com](https://github.com) y regístrate. Es gratis.

### 2. Crea un nuevo repositorio
- Haz clic en el botón **"+"** arriba a la derecha → **"New repository"**.
- Nómbralo así exactamente: `tu-usuario.github.io` (reemplaza "tu-usuario" por tu nombre de usuario de GitHub). Este nombre especial hace que GitHub lo publique automáticamente como sitio web.
- Márcalo como **Público**.
- No selecciones "Add a README" (ya tienes uno).
- Haz clic en **"Create repository"**.

### 3. Sube los archivos
Tienes dos formas de hacerlo, elige la que te resulte más cómoda:

**Opción A — Interfaz web de GitHub (más fácil, sin instalar nada):**
1. En tu nuevo repositorio, haz clic en **"uploading an existing file"** (o el botón "Add file" → "Upload files").
2. Arrastra los archivos `index.html`, `style.css`, `script.js` y `README.md`.
3. Baja hasta **"Commit changes"** y haz clic para confirmar.

**Opción B — Línea de comandos (si tienes Git instalado):**
```bash
cd carpeta-donde-tengas-los-archivos
git init
git add .
git commit -m "Primer commit: portafolio"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
git push -u origin main
```

### 4. Activa GitHub Pages
1. En tu repositorio, ve a **Settings** (Configuración).
2. En el menú izquierdo, haz clic en **Pages**.
3. En "Source", selecciona la rama **main** y la carpeta **/ (root)**.
4. Haz clic en **Save**.

### 5. Espera unos minutos y visita tu sitio
GitHub tarda 1–3 minutos en publicar. Tu portafolio quedará disponible en:

```
https://tu-usuario.github.io
```

### 6. Agrega el enlace a tu CV
Copia esa URL y agrégala en la sección de contacto de tu CV, junto a tu correo y LinkedIn.

## Notas técnicas

- Las tipografías (Fraunces e IBM Plex Sans) se cargan desde Google Fonts vía `<link>` en el `<head>` — funcionarán automáticamente una vez publicado, ya que requieren conexión a internet real (no cargarán si abres el archivo sin conexión).
- El sitio es responsive: se adapta a celular, tablet y escritorio.
- No requiere backend, base de datos ni build step — es HTML/CSS/JS plano, así que cualquier cambio que hagas se refleja con solo guardar y volver a subir el archivo.
