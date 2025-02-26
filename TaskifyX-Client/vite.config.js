import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// Vite configuration
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      buffer: 'buffer',
      events: 'events',
    },
  },
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['buffer', 'events'],
  },
  build: {
    esbuild: {
      legalComments: 'inline',
    },
  },
});
