import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@C': path.resolve(__dirname, './src/components'),
      '@A': path.resolve(__dirname, './src/assets'),
      '@V': path.resolve(__dirname, './src/views'),
      '@R': path.resolve(__dirname, './src/router'),
      '@S': path.resolve(__dirname, './src/store'),
      '@U': path.resolve(__dirname, './src/utils'),
      '@H': path.resolve(__dirname, './src/hooks'),
      '@D': path.resolve(__dirname, './src/directives')
    }
  },
  css: {
    preprocessorOptions: {
      // 引入公共scss变量
      scss: {
        // 引入 varibles.scss 这样就可以在全局中使用 varibles.scss中预定义的变量了
        // 给导入的路径最后加上 ;
        // as 后面是定义的环境变量
        //   如果写as * ，可以直接使用变量名，如：变量名
        //   如果不写as *, 默认文件名即：variables, 使用variables.变量名
        //   如果是as vars，则使用vars.变量名
        additionalData: '@use "@/assets/styles/variables" as *;'
      }
    }
  }
})
