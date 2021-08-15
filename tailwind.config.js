  const colors = require('tailwindcss/colors')
  module.exports = {
      purge: [],
      purge: [
          './components/**/*.{vue,js}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './plugins/**/*.{js,ts}',
          './nuxt.config.{js,ts}',
      ],
      darkMode: false, // or 'media' or 'class'
      theme: {
          extend: {
              colors: {
                  cyan: colors.cyan,
              },
          },
      },
      variants: {
          extend: {},
      },
      plugins: [
          require('@tailwindcss/forms')
      ],
  }