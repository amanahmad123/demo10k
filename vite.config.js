import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project-site URL: https://amanahmad123.github.io/demo10k/
  base: '/demo10k/',
});
