# Parabrisas a Domicilio - Landing Page MVP

Landing page para servicio de reparación de parabrisas a domicilio en Santiago, Chile.

## Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) v4.16+
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v3.4+
- **Hosting:** Hostinger
- **Dominio:** reparacionparabrisasadomicilio.cl

## Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Beneficios.astro
│   │   ├── ComoFunciona.astro
│   │   ├── Precio.astro
│   │   ├── TiposDanos.astro
│   │   ├── Cobertura.astro
│   │   ├── FAQ.astro
│   │   ├── CTAFinal.astro
│   │   ├── Footer.astro
│   │   └── WhatsAppButton.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Deploy en Hostinger

1. Ejecutar `npm run build`
2. Subir contenido de `/dist` a `/public_html` en Hostinger
3. Configurar SSL en hPanel

## Configuración Pendiente

- [ ] Actualizar número de teléfono real
- [ ] Configurar Google Analytics
- [ ] Configurar Google Tag Manager
- [ ] Agregar Schema.org markup
- [ ] Configurar Meta Pixel

## Proyecto

Proyecto MVP para ROAS Digital SPA - Sistema Local Pack