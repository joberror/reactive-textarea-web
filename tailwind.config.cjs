// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        black: "#050210",
      },
      boxShadow: {
        default:
          "0 1px 3px rgba(11, 19, 36, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "bg-gradient":
          "linear-gradient(145deg, rgba(255, 229, 255, 0.27) 0%, rgba(226, 181, 249, 0.56) 40.10%, rgba(249, 232, 242, 0.78) 76.56%, #E1DAF0 100%)",
        "bg-dark": "",
        "bg-light": "",
      },
    },
    fontFamily: {
      body: "Poppins, sans-serif",
      mono: "'JetBrains Mono', monospace",
      heading: "Fredoka, sans-serif",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      pink: colors.pink,
      slate: colors.slate,
      purple: colors.purple,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
    scrollbar: ["dark"],
  },
};
