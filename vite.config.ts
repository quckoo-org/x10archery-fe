import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isDebug = process.env.VITE_DEBUG === 'true';

export default defineConfig(async () => {
  let httpsConfig = {};

  if (isDebug) {
    const fs = await import('fs');
    const path = await import('path');

    httpsConfig = {
      https: {
        key: fs.readFileSync(path.resolve(__dirname, 'ssl/key.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'ssl/cert.pem')),
      },
    };
  }

  return {
    plugins: [react()],
    optimizeDeps: {
      include: ['jwt-decode'],
    },
    server: {
      port: 8080,
      ...httpsConfig, // Добавляем HTTPS только если DEBUG включен
    },
  };
});