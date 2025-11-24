import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tirth-pipalia.github.io',
  base: '/sejal-ceramics.github.io', // Important for project pages
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
