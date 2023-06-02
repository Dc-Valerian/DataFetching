import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dataFetchingTeam",
      filename: "dataFetchingTeam.js",
      exposes: {
        './App': './src/App'
      },
      shared: ['react','react-dom',"@tanstack/react-query","swr"],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
