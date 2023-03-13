module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: ["light", "dark", "night"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
