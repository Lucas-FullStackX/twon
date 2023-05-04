import type { Config } from 'tailwindcss';
import tailwindConfig from '../../../node_modules/side-ui/dist/tailwind.config';

export default {
  content: [''],
  theme: {
    extend: {},
  },
  presets: [tailwindConfig],
  plugins: [require('tailwindcss-scrollbar')],
} satisfies Config;
