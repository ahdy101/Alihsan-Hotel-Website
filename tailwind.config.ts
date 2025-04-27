import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#1D1D1F', // Apple's true black
          50: '#F5F5F7',      // Light gray
          100: '#E8E8ED',
          800: '#424245',     // Dark gray
          900: '#1D1D1F',
        },
        gold: {
          100: '#F5F2EA',    // Cream
          400: '#D4AF37',    // Classic gold
          600: '#B88A2D',    // Deep gold
        }
      },
      fontFamily: {
        cormorant: [
          'var(--font-cormorant-garamond)',
          {
            fontFeatureSettings: '"liga" 1, "kern" 1, "ss01" 1', // Enhanced typographic features
            fontVariationSettings: '"opsz" 32, "wght" 400',
            ...fontFamily.serif
          }
        ],
        sans: [
          'var(--font-montserrat)',
          {
            fontFeatureSettings: '"liga" 1, "kern" 1',
            fontVariationSettings: '"wght" 300',
            ...fontFamily.sans
          }
        ],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',       // Apple's preferred light weight
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',    // Apple-style tracking
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-text-fill-stroke')(),
  ],
};

export default config;