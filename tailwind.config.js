/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['League Spartan', 'Helvetics', 'ui-sans-serif', 'system-ui', 'ui-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#472183',
          DEFAULTk: '#FF0066'
          // 700: '',
        }
      },
    }
  },
  plugins: []
};
