// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Reactive-Textarea",
      meta: [
        { name: "author", content: "Bolarinwa Olakunle (Joberror)" },
        {
          name: "description",
          content:
            "This plugin provides functionality for text and word counting, filtering, and limiting when an input is made on an HTML textarea element",
        },
        {
          name: "keywords",
          content:
            "textarea, textarea-counter, textarea-limiter, textarea-filter, textarea-callback, reactive, es6, javascript, typescript, textarea-plugin",
        },
        { name: "rating", content: "General" },
        {
          name: "copyright",
          content: `Bolarinwa Olakunle (Joberror) - ${new Date().getFullYear()}`,
        },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=yes" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
  modules: [
    [
      "@nuxtjs/tailwindcss",
      {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        exposeConfig: true,
        config: {},
        injectPosition: 0,
        viewer: true,
      },
    ],
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Fredoka: [600, 700],
          Poppins: [400, 500, 600, 700],
          "JetBrains+Mono": [400],
        },
        display: "swap",
        prefetch: true,
        preconnect: true,
      },
    ],
  ],
  devtools: { enabled: false },
});
