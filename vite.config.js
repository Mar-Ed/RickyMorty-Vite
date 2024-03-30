import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Mar-Ed.github.io/RickyMorty-Vite/",
  plugins: [react()],
})
