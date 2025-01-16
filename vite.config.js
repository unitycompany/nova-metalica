import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Troque "meu-portfolio-react" pelo nome do seu repositório
  base: "/",
  plugins: [react()]
});
