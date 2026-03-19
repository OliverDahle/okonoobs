/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nord: {
          deep: '#00005E',
          navy: '#000078',
          blue: '#0079AF',
          sky: '#00AEEF',
          light: '#E8F3FB',
          pale: '#F4F8FC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
