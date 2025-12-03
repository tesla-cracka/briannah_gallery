// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/briannah_gallery/", 
  build: {
    outDir: 'docs' // Or 'dist' if you prefer that name locally
  }
});
