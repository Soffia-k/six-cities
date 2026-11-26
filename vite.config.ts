import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/img'),
      '@avatars': path.resolve(__dirname, 'src/img/avatars'),
    },
  },
})
