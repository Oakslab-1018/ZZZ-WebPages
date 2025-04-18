import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      //起别名
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@firstpage': path.resolve(__dirname, 'src/components/firtsPage'),
      '@always': path.resolve(__dirname, 'src/components/always'),
      '@secondpage': path.resolve(__dirname, 'src/components/secondPage'),
      '@thirdpage': path.resolve(__dirname, 'src/components/thirdPage'),
      '@forthpage': path.resolve(__dirname, 'src/components/forthPage'),
      '@lastpage': path.resolve(__dirname, 'src/components/lastPage'),
    },
  },
})
