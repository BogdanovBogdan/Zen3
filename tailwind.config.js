/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        0: '0px',
      },
      colors: {
        gray: {
          100: 'rgba(245, 245, 247, 1)',
          light: '#e6e7e9',
        },
        black: {
          background: '#040404',
          'background-purpose': '#12141D',
          'perk-gradient-light': 'rgba(4, 6, 14, 0.9)',
          'perk-gradient-dark': '#04060E',
        },
        gold: {
          dark: '#FA6641',
          light: '#EAE100',
        },
      },
      borderRadius: {
        avatar: '6rem',
      },
      width: {
        chart: '108px',
        time: '95px',
        glass: '107px',
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
