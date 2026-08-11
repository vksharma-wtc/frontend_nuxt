// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],
  i18n: {
    lazy: true,
    langDir: 'locales',

    defaultLocale: 'en',

    strategy: 'prefix',

    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'fr',
        name: 'French',
        file: 'fr.json'
      },
      {
        code: 'nl',
        name: 'Dutch',
        file: 'nl.json'
      },
      {
        code: 'hi',
        name: 'हिन्दी',
        file: 'hi.json'
      }
    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      wordpressGraphql:
        'https://chirag.academy/graphql'
    }
  }
})