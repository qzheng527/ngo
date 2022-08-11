
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Occlum - A library OS empowering everyone to run every application in secure enclaves',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A library OS empowering everyone to run every application in secure enclaves' },
      { name: 'keywords', content: 'Occlum,LibOS,Library OS,Secure,Enclave,Secure Enclave,SGX,Rust,Cloud' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }
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
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      plugins: {
        'autoprefixer': {},
        'postcss-import': {},
        'precss': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    publicPath: '/static/',
  },
  server: {
    host: '0.0.0.0',
  }
}
