import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3f9',
          100: '#fde6f2',
          200: '#facce5',
          300: '#f5a3cf',
          400: '#ee6cb1',
          500: '#e23c94',
          600: '#c4247b',
          700: '#a41766',
          800: '#7e1451',
          900: '#631343'
        },
        dark: '#0b0b14'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-light': 'radial-gradient(circle at 1px 1px, rgba(226,60,148,0.08) 1px, transparent 0)',
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(226,60,148,0.15) 1px, transparent 0)'
      }
    }
  },
  plugins: [typography]
};

export default config;
