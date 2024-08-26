import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: './vitestSetup.ts',
  },
  plugins: [tsconfigPaths()],

})
