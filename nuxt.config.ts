import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
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