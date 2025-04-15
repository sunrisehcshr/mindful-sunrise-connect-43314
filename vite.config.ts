
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Use code splitting to improve initial load time
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split page components into separate chunks
          if (id.includes('/pages/')) {
            // Get the page name for better chunk naming
            const match = id.match(/\/pages\/([^/]+)/);
            if (match && match[1]) {
              return `page-${match[1].toLowerCase()}`;
            }
          }
          
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            if (id.includes('tanstack')) {
              return 'vendor-tanstack';
            }
            if (id.includes('lucide')) {
              return 'vendor-lucide';
            }
            return 'vendor'; // Other dependencies
          }
          
          // Component chunks
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          if (id.includes('/components/')) {
            return 'components';
          }
          
          // Lib and utils
          if (id.includes('/lib/')) {
            return 'lib';
          }
        }
      },
    },
    // Use esbuild for minification instead of terser
    minify: 'esbuild',
    // Generate source maps for debugging
    sourcemap: mode !== 'production',
    // Configure CSS output
    cssCodeSplit: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
  },
}));
