import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import fs from 'fs';
// import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react()
  ],
  optimizeDeps: {
    include: ['jwt-decode'],
  },
  server: {
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
    // },
    port: 8080,
  },
})
