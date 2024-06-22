import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: "/",
  // server: {
  //   proxy: {
  //     '/cms': { // Matches any request starting with /api
  //       target: 'https://api.hubapi.com/', // Target URL for proxied requests
  //       changeOrigin: true, // Change origin header to match development server
  //       secure: false, // Allow insecure connections for development (not recommended for production)
  //     },
  //   },
  // },
  // ... other configuration options
});