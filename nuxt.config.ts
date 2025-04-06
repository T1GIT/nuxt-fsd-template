export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@formkit/auto-animate',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    'nuxt-lodash',
    'nuxt-fsd',
  ],
  devtools: {
    enabled: true,
  },
  srcDir: './src/',
  serverDir: './server/',
  compatibilityDate: '2024-11-01',
  googleFonts: {
    families: {
      Comfortaa: true,
    },
  },
  icon: {
    customCollections: [
      {
        prefix: 'i',
        dir: './src/shared/icons/',
      },
    ],
  },
  lodash: {
    prefix: '_',
    upperAfterPrefix: false,
  },
})
