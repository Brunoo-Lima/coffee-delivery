/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Baloo 2', 'sans-serif'],
        second: ['Roboto', 'sans-serif'],
      },
      colors: {
        card: '#F3F2F2',
        yellow_dark: '#C47F17',
        yellow_light: '#F1E9C9',

        subtitle: '#403937',
        describe: '#8D8686',
        texts: '#574F4D',

        btn_quantity: '#E6E5E5',
        purple_dark: '#4B2995',
      },
    },
  },
  plugins: [],
};
