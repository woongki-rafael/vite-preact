import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: {
        "ie": "11",
      },
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: ['es.promise', 'es.symbol', 'es/reflect'],
      modernPolyfills: true,
    }),
    preact()
  ],
})
