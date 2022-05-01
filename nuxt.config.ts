import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        /**
         * https://tailwindui.com/documentation#requirements
         */
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
        /**
         * https://github.com/nhn/tui.editor/blob/master/docs/en/viewer.md
         */
        { rel: 'stylesheet', href: 'https://uicdn.toast.com/editor/latest/toastui-editor-viewer.min.css' }
      ]
    }
  },
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  /**
   * The private keys which are only available within server-side
   * Keys within public, will be also exposed to the client-side
   *  */
  runtimeConfig: {
    // The private keys which are only available within server-side
    cdaToken: process.env.cdaToken,
    // Keys within public, will be also exposed to the client-side
    public: {
      cdaUri: process.env.cdaUri,
      previewUri: process.env.previewUri,
      spaceId: process.env.spaceId,
      environmentId: process.env.environmentId,
    }
  }
})
