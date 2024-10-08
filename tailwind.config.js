/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    darkSelector: '.dark-mode', 
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1200px',
      },
    },
    extend: {
      fontFamily: {
        custom: ['Poppins'],
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark", "dark-hover", "dark-group-hover", "dark-even", "dark-odd", "hover", "responsive"],
      borderColor: ["dark", "dark-focus", "dark-focus-within", "hover", "responsive"],
      textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
    }
  },
  plugins: [
    //require('tailwindcss-dark-mode')()
  ]
}