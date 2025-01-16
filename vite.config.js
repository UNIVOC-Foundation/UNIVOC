import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Set chunk size warning limit to 1000 KB (1 MB)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      // Manual chunking strategy
      output: {
        manualChunks(id) {
          // If the module is from node_modules (third-party dependencies), place it into a separate 'vendor' chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
