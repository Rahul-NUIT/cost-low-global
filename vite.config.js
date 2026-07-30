import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Deployed at the domain root. React Router reads this back as the router
  // basename via import.meta.env.BASE_URL (App.jsx), and src/utils/api.js
  // resolves the form endpoints against it — change the path here only.
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Keep the framework out of the page chunks so navigating a route only
        // downloads that route. Rolldown requires the function form.
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) {
            return 'react';
          }
          if (/[\\/]node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/.test(id)) {
            return 'motion';
          }
          return undefined;
        },
      },
    },
  },
});
