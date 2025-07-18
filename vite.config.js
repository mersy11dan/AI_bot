import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // Pre-bundle react‑icons so Rollup can see every sub‑path
  optimizeDeps: {
    include: [
      'react-icons',
      'react-icons/fa',
      'react-icons/fi'
    ]
  },

  // (Only if you truly want to externalize them in your build)
  build: {
    rollupOptions: {
      external: [
        // remove these lines if you want the icons bundled into your app
        'react-icons',
        'react-icons/fa',
        'react-icons/fi'
      ]
    }
  }
})
