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
      'default-src': ["'self'"],
      'script-src': ["'self'", "'nonce-{{nonce}}'"],
      'style-src': ["'self'", "'nonce-{{nonce}}'", 'https://fonts.googleapis.com'],
      'font-src': ["'self'", 'https://fonts.gstatic.com'],
      'img-src': ["'self'", 'data:', 'https://cdn.dummyjson.com'],
      'connect-src': ["'self'", 'https://dummyjson.com'],
      'frame-src': ["'none'"],
      'object-src': ["'none'"],
      'base-uri': ["'self'"],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'manifest-src': ["'self'"],
      'media-src': ["'self'"]
    },
    xContentTypeOptions: 'nosniff',
    xDownloadOptions: 'noopen',
    xFrameOptions: 'DENY',
    xPermittedCrossDomainPolicies: 'none',
    xXSSProtection: '0' // Modern browsers ignore this
  }
}

});
