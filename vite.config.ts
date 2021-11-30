import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => ({
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js",
    },
  },
  plugins: [react(), (await import("@mdx-js/rollup")).default()],
}))
