import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { // create a special link
      '@': '/src', 
      '@constant': '/src/constants'
    },
  },
})
