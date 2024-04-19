import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@data': path.resolve(__dirname, './src/data'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
