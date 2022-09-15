module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'content': '#f3f3f3',
        'main': '#29857c',
        'link': '#125161',
        'inactive': '#959595',
        'hover': '#e0e0e0',
        'line': '#cdcdcd',
      },
      spacing: {
        'sidebar': '210px'
      },
      zIndex: {
        0: 0,
        1: 1,
      }
    },
  },
  plugins: [],
}