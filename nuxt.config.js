export default {
  css: [
    // SCSS file in the project
    '~/assets/scss/main.scss'
  ],
  css: ['@/assets/css/reset.css'],
  styleResources: {
    scss: ['~/assets/scss/*.scss'],
  },
  modules:['@nuxt/content'],
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      titleTemplate: '%s - ' + 'タイトル',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'kusuponblog' || '' },
        { hid: 'keywords', name: 'keywords', content: 'kusuponblog,kusupon,blog' },
  
        { hid: 'og:site_name', property: 'og:site_name', content: 'kusuponblog' },
        { hid: 'og:type', property: 'og:type', content: 'blog' },
        { hid: 'og:url', property: 'og:url', content: 'https://kusuponblog.netlify.app/' },
        { hid: 'og:title', property: 'og:title', content: 'kusuponblog' },
        { hid: 'og:description', property: 'og:description', content: 'kusuponblog' },
        { hid: 'og:image', property: 'og:image', content: 'https://kusuponblog.netlify.app/' },
  
        { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
  
      ],
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
