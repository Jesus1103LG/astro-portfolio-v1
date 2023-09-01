import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://Jesus1103LG.github.io",
  base: "/astro-portfolio-v1/client",
  integrations: [tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
