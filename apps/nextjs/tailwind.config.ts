import type { Config } from 'tailwindcss';
import baseConfig from '@acme/tailwind-config';

export default {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        center: '0 0 50px -12px rgb(0 0 0 / 0.25)',
      },
      fontSize: {
        'fluid-base': 'clamp(2rem, 8vw, 5rem)',
        'fluid-sm': 'clamp(0.7rem,  1.5vw, 1rem)',
      },
      animation: {
        'fade-in': 'anime-fade-in 1s ease-in-out forwards',
      },
      keyframes: {
        'anime-fade-in': {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100%' },
        },
      },
    },
  },

  presets: [baseConfig],
} satisfies Config;
