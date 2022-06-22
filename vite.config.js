import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // "@": "/src"
      "@": path.resolve(__dirname, 'src')
      // _dirname  物理路径，根目录地址
      // alias 别名
    }
  }
})
