# Izquierdo y de la Cueva — Web del Despacho

## Arquitectura del Proyecto

```
Stack: Astro 4 + Tailwind CSS + Decap CMS + Supabase + Netlify
Velocidad: HTML estático pre-renderizado → puntuación 95-100 en Lighthouse
Edición: Panel CMS en /admin (como WordPress, pero sin WordPress)
Backend: Supabase para formularios, citas y pagos
Deploy: Netlify (gratis en tier básico, suficiente para este proyecto)
```

### ¿Por qué este stack?

| Requisito | Solución | Por qué |
|-----------|----------|---------|
| Velocidad máxima | Astro (SSG) | Genera HTML puro, sin JavaScript innecesario. |
| Edición tipo WP | Decap CMS | Interfaz visual en `/admin`, edita contenido desde el navegador. |
| Blog + SEO | Astro + MDX + Sitemap | Genera sitemap.xml, meta tags, schema.org automáticos. |
| 3 idiomas | Astro i18n + carpetas /es /en /de | Cada idioma tiene sus propias URLs. |
| Formulario avanzado | Supabase + Netlify Functions | Flujo completo: formulario → email → aceptar → agendar → pagar. |
| Pagos | Stripe (+ Bizum manual) | Stripe para tarjetas, Bizum con comprobante subido. |
| Coste | ~0€/mes | Netlify free + Supabase free tier = 0€ hasta mucho tráfico. |

---

## Estructura de Archivos

```
lanzarote-lawyers/
├── public/
│   ├── admin/           ← Panel CMS (Decap)
│   │   ├── index.html
│   │   └── config.yml   ← Configuración de colecciones editables
│   └── images/          ← Imágenes estáticas
│       ├── favicon.svg
│       ├── hero-lanzarote.webp   ← NECESITAS AÑADIR
│       ├── og-image.jpg          ← NECESITAS AÑADIR
│       ├── team/                 ← Fotos del equipo
│       └── uploads/              ← Imágenes subidas desde CMS
│
├── src/
│   ├── components/      ← Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   ├── AreasSection.astro
│   │   ├── NewsSection.astro
│   │   ├── CTASection.astro
│   │   ├── ContactForm.astro     ← Formulario multi-paso
│   │   └── CookieBanner.astro
│   │
│   ├── content/         ← Contenido editable desde CMS
│   │   ├── blog/
│   │   │   ├── es/      ← Noticias en español (.md)
│   │   │   ├── en/      ← Noticias en inglés (.md)
│   │   │   └── de/      ← Noticias en alemán (.md)
│   │   ├── team/        ← Miembros del equipo (.json)
│   │   └── legal/       ← Páginas legales (.md)
│   │
│   ├── i18n/
│   │   └── translations.js  ← TODAS las traducciones ES/EN/DE
│   │
│   ├── layouts/
│   │   └── Base.astro   ← Layout principal con SEO
│   │
│   ├── pages/
│   │   ├── index.astro         ← Redirect a /es/
│   │   ├── api/
│   │   │   └── consultation.js ← API endpoint del formulario
│   │   ├── es/                 ← Páginas en español
│   │   │   ├── index.astro     ← HOME
│   │   │   ├── contactar.astro
│   │   │   ├── areas/          ← NECESITAS CREAR
│   │   │   ├── equipo/         ← NECESITAS CREAR
│   │   │   └── noticias/       ← NECESITAS CREAR
│   │   ├── en/                 ← Páginas en inglés
│   │   └── de/                 ← Páginas en alemán
│   │
│   └── styles/
│       └── global.css   ← Estilos globales + Tailwind
│
├── netlify/
│   └── functions/
│       └── notify-consultation.js  ← Email de notificación
│
├── supabase/
│   └── schema.sql       ← SQL para crear tablas en Supabase
│
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── netlify.toml
├── .env.example
└── tsconfig.json
```

---

## Guía de Despliegue Paso a Paso

### PASO 1: Preparar el entorno local

```bash
# 1. Descomprime el proyecto y entra en la carpeta
cd lanzarote-lawyers

# 2. Instala dependencias
npm install

# 3. Copia el archivo de variables de entorno
cp .env.example .env

# 4. Arranca en desarrollo
npm run dev
# → Abre http://localhost:4321
```

### PASO 2: Añadir imágenes

Necesitas añadir estas imágenes en `public/images/`:

1. **`hero-lanzarote.webp`** — Foto hero de Lanzarote o del despacho (mínimo 1920px ancho).
   Usa tu foto actual o pide a la IA que genere una imagen.
2. **`og-image.jpg`** — Imagen para compartir en redes (1200x630px).
3. **`team/*.webp`** — Fotos de cada miembro del equipo.

> Tip: Convierte todas las imágenes a WebP para máxima velocidad.
> Puedes usar: `cwebp input.jpg -o output.webp -q 80`

### PASO 3: Configurar Supabase

1. Ve a [app.supabase.com](https://app.supabase.com) y crea un proyecto.
2. Ve a **SQL Editor** y pega todo el contenido de `supabase/schema.sql`.
3. Ejecuta el SQL → se crean las tablas `consultations`, `team_members`, `blog_posts`.
4. Ve a **Settings → API** y copia:
   - Project URL → `SUPABASE_URL` en tu `.env`
   - Anon public key → `SUPABASE_ANON_KEY` en tu `.env`

### PASO 4: Subir a GitHub

```bash
# Inicializa git
git init
git add .
git commit -m "Initial commit: Izquierdo y de la Cueva website"

# Crea repo en GitHub y sube
gh repo create lanzarote-lawyers --private --push
# O manualmente:
git remote add origin https://github.com/tu-usuario/lanzarote-lawyers.git
git push -u origin main
```

### PASO 5: Deploy en Netlify

1. Ve a [app.netlify.com](https://app.netlify.com).
2. **Add new site → Import from GitHub** → selecciona tu repo.
3. Netlify detectará Astro automáticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Ve a **Site settings → Environment variables** y añade:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `RESEND_API_KEY` (si quieres notificaciones por email)
5. **Deploy** → tu web estará en `https://tu-site.netlify.app`.

### PASO 6: Activar el CMS (edición tipo WordPress)

1. En Netlify, ve a **Integrations → Identity** → **Enable Identity**.
2. Bajo Identity, ve a **Settings → Registration → Invite only**.
3. Invita tu email desde **Identity → Invite users**.
4. Ve a **Integrations → Identity → Services → Git Gateway** → **Enable**.
5. Ahora puedes acceder al CMS en: `https://tu-site.netlify.app/admin/`
6. Desde ahí puedes:
   - Crear y editar noticias en 3 idiomas
   - Gestionar miembros del equipo
   - Editar páginas legales
   - Todo con una interfaz visual sin tocar código

### PASO 7: Conectar dominio

1. En Netlify → **Domain management → Add domain**: `lanzarotelawyers.com`
2. Cambia los DNS en tu registrador actual al que Netlify te indique.
3. Netlify provee HTTPS gratis automáticamente.

### PASO 8: Configurar notificaciones por email (opcional)

1. Crea cuenta en [resend.com](https://resend.com) (100 emails/día gratis).
2. Verifica tu dominio en Resend.
3. Copia tu API key → `RESEND_API_KEY` en las variables de Netlify.
4. Ahora cada nueva consulta enviará un email al despacho.

---

## Flujo del Formulario de Contacto

```
CLIENTE                         DESPACHO
  │                                │
  ├─ Rellena formulario ──────────►│
  │  (3 pasos: datos,             │
  │   consulta, reunión)          │
  │                                │
  │                    ◄── Email notificación
  │                        + entrada en Supabase
  │                                │
  │                    ◄── Secretaría revisa
  │                        (panel Supabase)
  │                                │
  │  Email con propuesta ◄────────┤
  │  de fecha/hora                 │
  │                                │
  ├─ Confirma + paga ─────────────►│
  │  (Stripe / Bizum)             │
  │                                │
  │  Confirmación ◄───────────────┤
  │  + enlace Meet                 │
  │  + evento calendario           │
  │                                │
  │  Recordatorio 24h ◄──────────┤
  │  antes                         │
```

### Partes pendientes de implementar

El formulario básico YA FUNCIONA. Para completar el flujo avanzado:

1. **Panel de gestión** — Crear una interfaz React en `/admin/consultations`
   que lea de Supabase y permita aceptar/rechazar/agendar.
   → Pide a Claude o GPT: *"Crea un panel React con Supabase para gestionar
   la tabla consultations con estados pending/accepted/scheduled/paid"*

2. **Stripe Checkout** — Cuando el abogado acepta, enviar link de pago.
   → Pide: *"Crea una Netlify Function que genere un Stripe Checkout Session
   para una consulta legal de 50€"*

3. **Google Calendar** — Tras el pago, crear evento automáticamente.
   → Pide: *"Crea una función que use Google Calendar API con service account
   para crear un evento con enlace de Google Meet"*

4. **Recordatorios** — Usar Supabase Edge Functions o un cron en Netlify.
   → Pide: *"Crea un Supabase Edge Function que envíe recordatorios 24h antes
   de las consultas confirmadas"*

---

## Páginas que Faltan por Crear

### Plantilla para crear las páginas restantes:

Copia el patrón de `src/pages/es/index.astro` para crear:

```
src/pages/es/areas/index.astro         ← Lista de áreas
src/pages/es/areas/[slug].astro        ← Página individual de cada área
src/pages/es/equipo/index.astro        ← Página del equipo
src/pages/es/equipo/[slug].astro       ← Ficha individual
src/pages/es/noticias/index.astro      ← Blog listing
src/pages/es/noticias/[slug].astro     ← Post individual
src/pages/es/legal.astro               ← Aviso legal
src/pages/es/privacidad.astro          ← Política de privacidad
src/pages/es/cookies.astro             ← Política de cookies
```

Y lo mismo para `/en/` y `/de/`.

**Prompt para Claude/GPT para generar cada página:**

> "Tengo un proyecto Astro con este layout Base.astro [pega el contenido]
> y estas traducciones [pega i18n/translations.js].
> Crea la página `src/pages/es/equipo/index.astro` que muestre una grid
> de miembros del equipo leyendo los archivos JSON de src/content/team/,
> con diseño elegante estilo despacho de abogados, fondo navy, tarjetas
> con foto y nombre, hover con overlay dorado."

---

## Optimización de Velocidad

El proyecto ya está optimizado para velocidad:

- **HTML estático** — Astro genera HTML puro sin framework JS.
- **CSS inline crítico** — Tailwind purga CSS no usado.
- **Fonts preloaded** — Las fuentes se precargan en el head.
- **Imágenes WebP** — Formato optimizado con lazy loading.
- **Cache agresiva** — Headers configurados en netlify.toml.
- **No jQuery, no WordPress** — Zero bloat.

Para medir: [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Cómo Usar Claude + GPT Eficientemente

### Estrategia para no agotar tokens:

1. **Claude** → Para crear componentes nuevos, lógica compleja, debugging.
2. **GPT** → Para traducciones, contenido legal, textos repetitivos.

### Prompt base para GPT (pégale esto al principio):

```
Estoy construyendo una web con Astro 4 + Tailwind CSS para un despacho
de abogados en Lanzarote llamado "Izquierdo y de la Cueva".

Stack: Astro 4, Tailwind CSS, Supabase, Netlify, Decap CMS.
Diseño: Elegante, oscuro (navy #0A1628), acento dorado (#C4A265),
fondo crema (#F5F3EF). Fuente display: Playfair Display. Body: Inter.
Idiomas: ES, EN, DE.

Componentes usan Astro (.astro), traducciones están en
src/i18n/translations.js, layout base en src/layouts/Base.astro.

Cada componente recibe `lang` como prop y usa:
import { useTranslations, getLocalePath } from '../i18n/translations';
const t = useTranslations(lang);
```

### Prompts específicos útiles:

**Para la página de equipo:**
> "Crea src/pages/es/equipo/index.astro. Lee archivos JSON de
> src/content/team/. Grid responsive 2-4 columnas. Cada tarjeta: foto
> cuadrada, nombre debajo, cargo. Hover: overlay oscuro con bio.
> Click: lleva a página individual."

**Para la página individual de área:**
> "Crea src/pages/es/areas/[slug].astro con getStaticPaths().
> Las áreas están definidas en i18n/translations.js. Muestra título,
> descripción larga, icono, y un CTA de contacto al final."

**Para el blog listing:**
> "Crea src/pages/es/noticias/index.astro que lea archivos .md de
> src/content/blog/es/ usando Astro.glob(). Grid de posts con fecha,
> título, extracto. Paginación si hay más de 9 posts."

---

## Checklist de Lanzamiento

- [ ] Imágenes hero, OG y equipo añadidas
- [ ] Contenido de noticias migrado desde web actual
- [ ] Textos legales (aviso legal, privacidad, cookies) completados
- [ ] Supabase configurado y schema ejecutado
- [ ] Deploy en Netlify funcionando
- [ ] CMS accesible en /admin
- [ ] Dominio conectado y HTTPS activo
- [ ] Google Analytics / Search Console configurado
- [ ] Formulario de contacto probado end-to-end
- [ ] Test en móvil y tablets
- [ ] PageSpeed > 90 en todas las métricas
- [ ] Todas las páginas EN y DE creadas
- [ ] Sitemap.xml generado correctamente
- [ ] Flujo de pago con Stripe implementado (fase 2)
- [ ] Recordatorios automáticos configurados (fase 2)
