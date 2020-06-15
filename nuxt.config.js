export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Norburg & Scherp',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/global/global-imports.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/i18n.js',
    '@/plugins/vue-match-heights',
    '@/plugins/vue-mq',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // modules for full static before `nuxt export` (coming in v2.12)
    '@/modules/static',
    '@/modules/crawler',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    
    'nuxt-purgecss',
    ['@nuxtjs/dotenv', { systemvars: true }],
    ['nuxt-i18n', {
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
      strategy: 'prefix',
      locales: [
        {
          name: 'Swedish',
          code: 'sv',
          iso: 'sv-se',
          file: 'sv.json'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-gb',
          file: 'en.json'
        },
      ],
      parsePages: false, // Required
      pages: {
        // styleguide: {
        //   en: '/sgd-en', // -> accessible at /en/sgd-en (no prefix since it's the default locale)
        //   fr: '/sgd-fr', // -> accessible at /fr/sgd-fr
        //   sv: '/sgd-sv'  // -> accessible at /sgd-sv
        // },
        // 'page': {
        //   en: '/pp/:uid?', // -> accessible at /en/sgd-en (no prefix since it's the default locale)
        //   fr: '/pp/:uid?', // -> accessible at /fr/sgd-fr
        //   sv: '/pp/:uid?'  // -> accessible at /sgd-sv
        // }
      }

      //
      // i18n -> FYI -> TOUCHED FILES
      //
      // - store/index.js
      // - components/HeaderPrismic.js -> "MENU"
      // - components/FooterPrismic.js -> "TEXT & LOGOS"
      // - page/pages/**/*.vue -> "ASYNC GET CONTENT" 
      // - page/people/*/*.vue -> "ASYNC GET CONTENT"
      // - layouts/default.vue -> "SEO - META - SETUP"  
      // - plugins/i18n.js
      // - lang/*.json

   }],
  ],

  prismic: {
    endpoint: 'https://norburg-and-scherp.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  styleResources: {
    scss: [
      '~/assets/scss/component-imports/*.scss'
    ]
  },

  svgSprite: {
    input: '~/assets/icons/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
