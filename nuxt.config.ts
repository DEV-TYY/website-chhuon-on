import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    emailAddressTo: process.env.EMAIL_ADDRESS_TO,
    appName: process.env.APP_NAME
  },

  app: {
  head: {
     script: [
        {
          // Google Analytics 4 script
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-EKXDFG7QT4',
        },
        {
          // Inline GA initialization
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EKXDFG7QT4');
          `,
          type: 'text/javascript',
        },
      ],
    link: [
         { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
         { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' }
    ],

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