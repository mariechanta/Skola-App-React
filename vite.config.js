import { defineConfig } from 'vite';
export default defineConfig({
  // other configuration options
  resolve: {
    alias: {
      '@': '/src', // Add aliases for commonly used paths
    },
  },
});
