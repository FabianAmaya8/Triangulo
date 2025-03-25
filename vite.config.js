import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //cambiando puerto al 3001
  server: {
    port: 3001,
  }
})
