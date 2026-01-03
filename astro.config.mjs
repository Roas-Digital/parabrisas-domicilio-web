import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://reparacionparabrisasadomicilio.cl',
  output: 'static',
  build: {
    assets: '_assets'
  }
});