import { defineConfig } from 'vite';

// GitHub Pages serves project sites at https://<user>.github.io/<repo>/
// Relative base ensures CSS/JS load in that subdirectory (and still work locally).
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
});
