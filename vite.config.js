import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    viteCompression(), // gzip compression
    legacy({
      targets: ['defaults', 'not IE 11'] // support older browsers
    })
  ],
  build: {
    sourcemap: false, // disable sourcemaps in production
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'], // separate React into its own chunk
          vendors: ['axios', 'lodash'] // example: separate heavy libraries
        },
        // add prefetch for dynamic imports
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // pre-bundle these for faster dev start
  },
  server: {
    fs: {
      strict: false
    }
  },
  preview: {
    headers: {
      'Cache-Control': 'max-age=31536000, immutable' // cache static assets aggressively
    }
  }
});
