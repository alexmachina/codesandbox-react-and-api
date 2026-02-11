import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Proxy /api/* to Express — no CORS config needed
    proxy: {
      "/api": "http://localhost:3001",
    },
    // Auto-open browser on local dev (ignored in CodeSandbox)
    open: true,
  },
});
