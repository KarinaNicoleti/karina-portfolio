import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/karina-portfolio/', // nome do repositório no GitHub
  plugins: [react()],
})
