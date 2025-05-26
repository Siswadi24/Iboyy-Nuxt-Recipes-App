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
    baseURL: '/Iboyy-Nuxt-Recipes-App/', // Ganti 'repo-name' dengan nama repository GitHub Anda OKEEE
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
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-security'
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
      failOnError: false, // Skip errors during prerendering
    },
  },

  security: {
    headers: {
      contentSecurityPolicy: {
        'child-src': ["'self'", 'https://cdn.dummyjson.com/**', 'https://siswadi24.github.io/**'],
        'connect-src': ["'self'", 'https://dummyjson.com/**', 'https://siswadi24.github.io/**'],
        'default-src': ["'self'", 'https://siswadi24.github.io/**'],
        'font-src': ["'self'"],
        'img-src': ["'self'", 'https://cdn.dummyjson.com/**', 'https://siswadi24.github.io/**'],
        'script-src': ["'self'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://cdn.dummyjson.com/**', 'https://siswadi24.github.io/**'],
        'frame-src': ["'self'"],
        'media-src': ["'self'"],
        'manifest-src': ["'self'"]

      }
    }
  }
});
