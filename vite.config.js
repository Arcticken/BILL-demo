import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 需要安装 @types/node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components')
    }
  }
})
