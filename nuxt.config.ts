import type { Config } from "tailwindcss";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    highlight: {
      theme: "github-dark",
      preload: [
        "diff",
        "json",
        "js",
        "ts",
        "css",
        "shell",
        "html",
        "md",
        "yaml",
        "vue",
      ],
    },
  },
  // TODO: @nuxt/tailwindcss intelicense bug
  hooks: {
    "tailwindcss:config": (config: Config) => {
      config.plugins?.push(
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp")
      );
    },
  },
});
