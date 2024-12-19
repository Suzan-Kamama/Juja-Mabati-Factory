import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true
  },
  css: {
    postcss: './postcss.config.js'
  }
});