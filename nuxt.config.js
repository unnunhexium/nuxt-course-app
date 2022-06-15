const pkg = require("./package");
const bodyParser = require("body-parser");

module.exports = {
  mode: "spa",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt Course Blog",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/styles/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-blog-71888-default-rtdb.europe-west1.firebasedatabase.app/",
    credentials: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  transition: {
    name: "fade",
    mode: "out-in",
  },

  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-blog-71888-default-rtdb.europe-west1.firebasedatabase.app/",
    fbAPIKey: "AIzaSyBxrKerTAbfIFfsyxrdHdEcyL6Abq1kkF4",
  },

  serverMiddleware: [bodyParser.json(), "~/api"],
};
