import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from "vite-plugin-svgr";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    })
  ],
  resolve: {
    alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}]
  },
})
