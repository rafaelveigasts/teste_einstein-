import { defineConfig } from 'vite'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: './vitestSetup.ts',
  },
  plugins: [tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     "@" : path.resolve(__dirname, "src"),
  //     "@modules/*": path.resolve(__dirname, "src/modules/*"),
  //     "@middlewares/*": path.resolve(__dirname, "src/shared/http/middlewares/*"),
  //     "@database/*": path.resolve(__dirname, "src/shared/database/*"),
  //     "@config/*": path.resolve(__dirname, "src/config/*"),
  //     "@infra/*": path.resolve(__dirname, "src/shared/infra/*"),
  //     "@shared/*": path.resolve(__dirname, "src/shared/*"),
  //     "@tests/*": path.resolve(__dirname, "tests/*"),
  //   },

  // }
})
