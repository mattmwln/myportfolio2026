import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/config/site.mjs";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; // pakai static adapter

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  integrations: [react(), tailwind()],
  output: "static", // ganti dari server
  adapter: vercel(),
});
