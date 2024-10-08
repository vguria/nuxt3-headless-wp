// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [//'@nuxt/icon',
  '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/robots', '@nuxtjs/color-mode', 'nuxt-schema-org', 'nuxt-aos', 'nuxt-marquee', '@nuxtjs/sitemap', '@nuxt/icon', '@nuxt/fonts'],
  runtimeConfig: {
    public: {
      apiBase: "https://belairmagazine.es/wp-json/wp/v2/",
      siteUrl: "https://belairmagazine.es/",
      graphql: "https://belairmagazine.es/graphql",
      wpJson: "wp-json/wp/v2/",

    },
  },
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', {injectPosition: "first"}],
    config: {
      exposeConfig: true,
    },
    viewer: true,
    configPath: './tailwind.config.js',
    editorSupport: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    google: {
      families: {
        'Alike': [100, 200, 300, 400, 500, 600, 700, 800, 900],
        'Poppins': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      }
    }
  }, 
})