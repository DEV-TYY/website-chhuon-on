import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  runtimeConfig: {
    // server-only
    sendgridApiKey: process.env.SENDGRID_API_KEY,
    emailAddress: process.env.EMAIL_ADDRESS,
    emailAddressTo: process.env.EMAIL_ADDRESS_TO,

    public: {
      appName: process.env.APP_NAME,
    },
  },

  app: {
  head: {
    link: [
         { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
         { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' }
    ]
  }
  },
  modules: ['@nuxt/image'],
  image: {
    dir: 'assets/images'   // ← tell it to look here
  },

  devtools: { enabled: true },
  devtools: false,
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
    vue: {
      reactivityTransform: true,
      customElement: true,
      onVueError: (err) => {
        if (err.message.includes('No match found for location')) return;
        console.error(err);
      },
    },
  },

});