import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 使用相对路径，方便本地直接打开
  server: {
    port: 5001,
    host: true
  }
})

