// @ts-nocheck
// TODO: Check removing ts-nocheck, to fix the ts error
module.exports = {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  presets: [require('./node_modules/side-ui/dist/tailwind.config')],
  plugins: [require('tailwindcss-scrollbar')],
};
