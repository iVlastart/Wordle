import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default ({mode}:any)=>{
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  return defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    proxy:{
      '/api':{
        target: env.VITE_API_URL,
        changeOrigin: true,
        rewrite: path=>path.replace(/^\/api/, '')
      }
    }
  }
})

}