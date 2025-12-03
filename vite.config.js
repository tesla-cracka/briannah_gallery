// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// vitejs.dev
export default defineConfig({
  plugins: [react()],
  // Sets the base path for GitHub Pages
  base: "/briannah_gallery/",
  build: {
    // Outputs the build to the 'docs' folder for GitHub Pages compatibility
    outDir: 'docs'
  },
  // Defines an environment variable for App.jsx to use in fetch()
  define: {
    'process.env.VITE_BASE_URL': JSON.stringify('/briannah_gallery/')
  }
});
