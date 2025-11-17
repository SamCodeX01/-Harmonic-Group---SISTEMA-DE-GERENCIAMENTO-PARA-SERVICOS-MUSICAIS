import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@'                : path.resolve(__dirname, './src'),
      'components'       : path.resolve(__dirname, './src/components'),
      'hooks'            : path.resolve(__dirname, './src/hooks'),
      'pages_containers' : path.resolve(__dirname, './src/pages_containers'),
      'routes'           : path.resolve(__dirname, './src/routes'),
      'services'         : path.resolve(__dirname, './src/services'),
      'site_do_sistema'  : path.resolve(__dirname, './src/site_do_sistema'),
      'styles'           : path.resolve(__dirname, './src/styles'),
      'theme'            : path.resolve(__dirname, './src/theme'),
      'utils'            : path.resolve(__dirname, './src/utils')
    }
  }
})