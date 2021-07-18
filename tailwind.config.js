const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled : false,
    content : ['./source/**/*.html', './source/**/*.njk']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue
    },
    fontFamily: {
      'sans': '"Work Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      'serif': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      'mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      'display': ['Montserrat'],
      'body': ['Work Sans'],
    },
    borderRadius: {
      'none': '0',
     'sm': '4px',
     DEFAULT: '8px',
     'md': '12px',
     'lg': '24px',
     'full': '9999px',
     'large': '24px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
