// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/karina-portfolio/', // <== importante: nome exato do repositório no GitHub
  plugins: [react()],
});

