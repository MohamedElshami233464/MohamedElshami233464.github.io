// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/",                 // explicit (ok to omit, default is '/')
  build: { outDir: "dist" }, // default, but explicit helps
  server: { host: "::", port: 8080 }, // dev-only; harmless for build
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
}));
