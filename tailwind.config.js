const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enabled: true,
    content: ['./source/**/*.html', './source/**/*.njk']
  },
  darkMode: "media", // or 'media' or 'class'
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

    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.grey.800'),
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
                strong: {
                  color: 'white'
                },
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            h1: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h2: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h3: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            h4: {
              color: theme('colors.grey.800'),
              'margin-top': '0'
            },
            code: {
              color: 'white',
              'background-color': theme('colors.grey.800'),
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: theme('colors.grey.800'),
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(0, 0, 0, 30%)'
            },
            'ul > li': {
              '&::before': {
                'background-color': theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: theme('colors.grey.800'),
                'font-weight': 'bold'
              }
            }
          },
        },

        dark: {
          css: {
            color: 'white',
            a: {
              color: theme('colors.red.500'),
              'text-decoration': 'none',
              '&:hover, &.active': {
                color: 'white',
                'background-color': theme('colors.red.500'),
              },
            },
            strong: {
              color: theme('colors.red.500')
            },
            hr : {
              borderColor: theme('colors.gray.800')
            },
            h1: {
              color: 'white',
              'margin-top': '0'
            },
            h2: {
              color: 'white',
              'margin-top': '0'
            },
            h3: {
              color: 'white',
              'margin-top': '0'
            },
            h4: {
              color: 'white',
              'margin-top': '0'
            },
            code: {
              color: theme('colors.grey.800'),
              'background-color': 'white',
              '&:before, &:after': {
                display: 'none'
              }
            },
            p: {
              color: 'white',
              'margin-top': '0',
              'margin-bottom': '1em'
            },
            img: {
              'margin-top': '0',
              'margin-bottom': '0',
              'box-shadow': '0px 2px 4px -2px rgba(255, 255, 255, 30%)'
            },
            'ul > li': {
              '&::before': {
                'background-color': 'white',
                'font-weight': 'bold'
              }
            },
            'ol > li': {
              '&::before': {
                color: 'white',
                'font-weight': 'bold'
              }
            }
          }
        },
      })
    },
  },
  variants: {
    extend: {
      typography: ['dark']
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
