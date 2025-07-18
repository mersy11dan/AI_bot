import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // 1) Force Vite to pre‑bundle the icon package so it can be resolved:
  optimizeDeps: {
    include: [
      'react-icons',      // prebundle the whole package
      'react-icons/fa'    // and the sub‑entry you’re using
    ]
  },

  // 2) (Only if you’re building a library or SSR bundle  
  // and want to keep it OUT of your final bundle)
  build: {
    rollupOptions: {
      external: [
        'react-icons',     // treat the package as external
        'react-icons/fa'   // and its sub‑entry
      ]
    }
  }
})