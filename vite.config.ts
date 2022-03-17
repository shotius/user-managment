import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxInject: `import React from 'react'`, // inject this into components
  },
  plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
      },
    },
    host: true,
  },
});
