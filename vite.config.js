import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    // This tells the server to listen on all network interfaces.
    host: '0.0.0.0',
    // It's good practice to explicitly set the port.
    port: 5173,
    // This is the crucial part. We need to explicitly allow the ngrok host
    // so Vite's security feature doesn't block the connection.
    allowedHosts: [
      'abe78a0986d3.ngrok-free.app',
      'localhost', // Always good to keep localhost in here.
      '127.0.0.1'
    ]
  }
})