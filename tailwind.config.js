module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{vue,js,html}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      sm: '576px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
