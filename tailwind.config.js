module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#868790',
        'primary-200': '#636475',
        'primary-300': '#3B3B4A',
        'primary-400': '#282833',
        'primary-500': '#1D1D25',
        'warning-500': '#E74C3C',
        'accent-500': '#E9992A',
        'accent-600': '#E68703',
        success: '#049B13',
        info: '#0B68F4',
      },
      height: {
        '3px': '3px',
      },
      maxWidth: {
        16: '16rem',
        25: '25rem',
        '23rem': '23rem',
        '59rem': '59rem',
      },
      fontSize: {
        xs: ['0.75rem', '1.25rem'],
        sm: ['0.875rem', '1.375rem'],
        base: ['1rem', '1.5rem'],
        1.875: '1.875rem',
      },
      padding: {
        26: '6.5rem',
        '7.5rem': '7.5rem',
        17: '4.25rem',
      },
      width: {
        '25rem': '25rem',
        '23rem': '23rem',
      },
      lineHeight: {
        5.5: '1.375rem',
        9.5: '2.375rem',
      },
    },
  },
  plugins: [],
};
