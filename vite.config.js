// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // 👈 allows LAN access
    port: 5173,     // 👈 make sure it's the same port
  }
})
