// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Change this line to use relative paths:
  base: "./", 
  build: {
    outDir: 'docs'
  },
  // You may also remove the 'define' block entirely for simplicity if this works
  define: {
    'process.env.VITE_BASE_URL': JSON.stringify('./') 
  }
});
