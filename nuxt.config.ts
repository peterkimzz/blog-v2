export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "dayjs-nuxt"],
  runtimeConfig: {
    public: {
      HOSTNAME: "https://www.peterkimzz.com",
    },
  },
  tailwindcss: {
    viewer: false,
  },
  dayjs: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  ssr: false,
  nitro: {
    preset: "github-pages",
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
});
