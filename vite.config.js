import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        base: 'https://github.com/SamuelVarjao/site_drEduardoMazao',
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})
