import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static"; // pakai static adapter

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static", // ganti dari server
  adapter: vercel()
});