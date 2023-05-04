import type { Config } from 'tailwindcss';
import baseConfig from '@acme/tailwind-config';

export default {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  presets: [baseConfig],
} satisfies Config;
