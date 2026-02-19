import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
  head: {
    link: [
         { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' },
         { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png' }
    ]
  }
  },
  devtools: { enabled: true },
  devtools: false,
  css: ['./app/assets/css/main.css'],

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