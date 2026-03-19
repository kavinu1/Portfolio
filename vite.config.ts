import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Netlify deploys this site at the domain root, so keep an absolute root base.
  // (If you later deploy under a subpath, set VITE_BASE to that path, e.g. "/Portfolio/".)
  base: process.env.VITE_BASE ?? "/",
}));
