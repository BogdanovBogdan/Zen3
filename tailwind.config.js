/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        0: '0px',
      },
      colors: {
        'light-primary': '#16161A',
        'light-secondary': '#3C3C43A6',
        white: {
          100: '#FFFFFF',
          200: '#F5F5F7',
          300: '#EEEEEE',
          400: '#E6E7E9',
        },
        icon: {
          secondary: '#868990',
        },
      },
      width: {
        176: '44rem',
      },
      maxHeight: {
        98: '24.5rem',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
