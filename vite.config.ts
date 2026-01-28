import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  
    return {
      base: "/blocks-pages/",
      server: {
        port: 3002,
        host: '0.0.0.0',
      },
     
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
