// nuxt.config.ts
export default defineNuxtConfig({
  // Compatibility configurations
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },

  // Base URL for GitHub Pages
  app: {
    baseURL: 'https://github.com/Siswadi24/Iboyy-Nuxt-Recipes-App/', // Ganti 'repo-name' dengan nama repository GitHub Anda OKEEE
  },

  // Image configuration
  image: {
    domains: ['https://cdn.dummyjson.com'], // Tambahkan domain gambar yang Anda gunakan
  },

  // Unhead module configuration
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  // Devtools configuration
  devtools: { enabled: true },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS
    '@nuxtjs/google-fonts', // Google Fonts
    '@nuxt/icon', // Nuxt Icons
    '@nuxt/image', // Nuxt Image module
  ],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Montserrat: true // Menambahkan font Montserrat
    }
  },

  // Nitro configuration for prerendering (optional)
  nitro: {
    prerender: {
      routes: ['/'], // Prerender halaman utama
    },
  },
});
