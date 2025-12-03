// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vitejs.dev
export default defineConfig({
  plugins: [react()],
  // ----------------------------------------------------
  // Add this line below:
  base: "/briannah_gallery/", 
  // ----------------------------------------------------
});
