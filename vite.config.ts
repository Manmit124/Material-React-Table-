import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['@mui/icons-material', '@mui/material', '@mui/system', '@mui/x-date-pickers'],
      plugins: [commonjs()], // ✅ Fix CommonJS dependency resolution
    },
  },
});
