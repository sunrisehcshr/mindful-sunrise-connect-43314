
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
        manualChunks: {
          // Split vendor code into separate chunks
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@/components/ui'],
          'framer-motion': ['framer-motion'],
          'data-fetching': ['@tanstack/react-query'],
        },
      },
    },
    // Minify code in production
    minify: 'terser',
    // Generate source maps for debugging
    sourcemap: mode !== 'production',
    // Configure CSS output
    cssCodeSplit: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
  },
}));
