/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "slide-top":
          "slide-top 2s ease-in-out  infinite alternate-reverse both",
        "slide-down": "slide-down 2s ease-in-out alternate-reverse both",
      },
      keyframes: {
        "slide-top": {
          "0%": {
            transform: "translateY(0)",
          },
          to: {
            transform: "translateY(-7px)",
          },
        },
        "slide-down": {
          "0%": {
            transform: "translateY(-7px)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        pallete: {
          gray: "#333",
          ["light-gray-500"]: "#696969",
          "light-gray": "#999",
          light: "#f5f5f5",
        },

        dark: {
          body: "#1F2937",
          container: "#111827",
          input: "#374151",
          header: "hsla(210, 44%, 13%, .8)",
          footer: "hsla(210, 44%, 13%, 1)",
        },
      },
    },
  },
  plugins: [],
};
