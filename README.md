# Parasoles y Domos San Andrés - Sitio Web

Plataforma corporativa de alto rendimiento para el sector industrial y arquitectonico. Desarrollada con Next.js 15 y Tailwind CSS v4, enfocada en conversion directa via WhatsApp, optimizacion SEO local para Bucaramanga y arquitectura de componentes reutilizables.

## Stack Tecnologico

| Tecnologia | Version | Uso |
|---|---|---|
| Next.js | 15 | Framework React (App Router) |
| React | 19 | UI |
| TypeScript | 5.8 | Tipado estatico |
| Tailwind CSS | 4.1 | Estilos utilitarios |
| lucide-react | 0.511 | Iconos SVG |
| Turbopack | - | Bundler de desarrollo |

## Estructura del Proyecto

```
web/
├── app/
│   ├── layout.tsx           # Layout raiz: fuentes (Inter + Dancing Script), metadata SEO, OG tags
│   ├── page.tsx             # Pagina principal, compone todas las secciones
│   └── globals.css          # Directivas Tailwind v4, tokens de diseño, animaciones custom
├── components/
│   ├── Header.tsx           # Nav sticky, menu mobile hamburguesa, scroll progress bar
│   ├── Hero.tsx             # Seccion hero con CTA a WhatsApp, badge "15+ años"
│   ├── Services.tsx         # 3 tarjetas de servicio (Fabricacion, Mantenimiento, Diseño)
│   ├── About.tsx            # Seccion fundador con cita y firma
│   ├── Portfolio.tsx        # Galeria de 15 proyectos con overlay hover (3 cols)
│   ├── Testimonials.tsx     # Testimonio cliente + grid de estadisticas (500+, 98%, 24h, 100%)
│   ├── Contact.tsx          # Formulario de contacto + mapa Google Maps embed + datos de contacto
│   ├── Footer.tsx           # Footer 4 columnas (logo, servicios, enlaces, contacto)
│   └── WhatsAppButton.tsx   # Boton flotante WhatsApp con animacion pulse
├── public/
│   └── img/
│       ├── parasoles-y-domos-san-andres-logo.png  # Logo del negocio
│       ├── 1.png - 12.png                          # Fotos del portafolio
├── next.config.ts           # Config Next.js (remote images de Google)
├── postcss.config.mjs       # PostCSS con @tailwindcss/postcss
├── tsconfig.json            # Config TypeScript
├── eslint.config.mjs        # ESLint con next/core-web-vitals
└── package.json
```

## Tokens de Diseño

Definidos en `app/globals.css` via `@theme`:

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#009ec2` | Color principal (botones, acentos, iconos) |
| `--color-accent` | `#D62828` | Color de acento (badge experiencia) |
| `--color-text-dark` | `#101718` | Texto principal |
| `--color-text-muted` | `#5e848d` | Texto secundario |
| `--color-border` | `#dae4e7` | Bordes y separadores |
| `--color-background-light` | `#f5f8f8` | Fondo claro general |
| `--color-footer-bg` | `#001a2c` | Fondo del footer |
| `--color-whatsapp` | `#25D366` | Boton flotante WhatsApp |

## Fuentes

Cargadas via `next/font/google` (sin FOUT):

- **Inter** (`--font-inter`): Tipografia principal para todo el contenido
- **Dancing Script** (`--font-dancing-script`): Firma del fundador

## Animaciones Custom

| Clase | Efecto |
|---|---|
| `animate-on-scroll` | Fade in + slide up al cargar la seccion |
| `whatsapp-float` | Fade in + pulse verde en el boton WhatsApp |
| `hover-lift` | Elevacion con sombra al hacer hover en tarjetas |

## Secciones de la Pagina

1. **Header** - Nav sticky con backdrop blur, logo, enlaces de navegacion, boton "Cotizar Gratis" (WhatsApp), menu hamburguesa mobile, barra de progreso de scroll
2. **Hero** - Titulo principal, badge animado "Lideres en Santander", 2 CTAs, imagen hero con badge "15+ años de experiencia"
3. **Servicios** - 3 tarjetas: Fabricacion Premium, Mantenimiento Tecnico, Diseño Personalizado. Cada una con icono, descripcion y lista de caracteristicas
4. **Nosotros** - Foto del fundador con circulo decorativo, texto sobre la empresa, cita con firma de William Bayona Mendez
5. **Portafolio** - Galeria de 15 proyectos en grid 3 columnas. Hover muestra overlay con categoria y titulo del proyecto
6. **Testimonios** - Reseña de cliente con estrellas + grid 2x2 de estadisticas (500+ proyectos, 98% satisfaccion, 24h soporte, 100% material certificado)
7. **Contacto** - Formulario (nombre, telefono, servicio, mensaje) + mapa Google Maps embed (Calle 13 No. 13-13, Barrio Gaitan) + datos de contacto
8. **Footer** - 4 columnas con logo, servicios, enlaces rapidos, contacto. Texto SEO + copyright
9. **WhatsApp Button** - FAB fijo esquina inferior derecha, enlazado a +57 311 871 2937

## Datos de Contacto

- **Telefono/WhatsApp**: +57 311 871 2937
- **Telefono secundario**: 317 748 9473
- **Direccion**: Calle 13 No. 13 - 13, Barrio Gaitan, Bucaramanga, Colombia
- **Negocio**: CARPAS - Fabrica y Mantenimiento William Bayona Mendez

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo (con Turbopack)
npm run dev

# Build de produccion
npm run build

# Servir build de produccion
npm run start

# Lint
npm run lint
```

## Imagenes

- **Logo y portafolio**: Servidos desde `/public/img/` (archivos locales)
- **Hero, fundador, testimonio**: URLs externas de Google (`lh3.googleusercontent.com`)
- Configurado `remotePatterns` en `next.config.ts` para permitir imagenes de Google

## SEO

- Metadata completa en `layout.tsx`: titulo, descripcion, Open Graph (locale `es_CO`, type `website`)
- Texto SEO en el footer
- Atributos `alt` descriptivos en todas las imagenes
- HTML semantico con `lang="es"`
