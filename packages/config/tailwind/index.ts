import type { Config } from 'tailwindcss';

export default {
  content: [''],
  theme: {
    extend: {},
  },
  presets: [require('../../../node_modules/side-ui/dist/tailwind.config.ts')],
  plugins: [require('tailwindcss-scrollbar')],
} satisfies Config;
