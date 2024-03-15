import { defineConfig } from 'vite';
export default defineConfig({
  // other configuration options  vite.config.js
  resolve: {
    alias: {
      '@': '/src', // Add aliases for commonly used paths
    },
  },
});
