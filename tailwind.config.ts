import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '440px',

      'xs-2': '576px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      '2md': '876px',
      // => @media (min-width: 876px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'header-bg': 'rgba(247, 247, 247, 0.20)',
        'image-overlay': '#060606'
      },
      width: {
        'homepage-banner-text': 'calc(100% - 40px)',
      },
      height: {
        'header-mobile-height': '72px',
        'header-desktop-height': '96px'
      },
      colors: {
        'color-1': '#30ADCF',
        'color-2': '#2AE1CB',
        'color-3': 'rgba(6, 6, 6, 0.50)',
        'color-4': '#3A3A3A',
        'white-1': '#F8F8F8',
        'white-2': '#F6F6F6',
        'blue-1': '#21ABCA',
        'gray-1': '#B3B3B3',
        'gray-2': '#E6E6E6',
        'gray-3': '#F4F4F4',
        'red-1': '#E21010',
        'black-00': 'rgba(0, 0, 0, 0)',
        'black-90': 'rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        imageLoad: {
          '0%': { opacity: '0.1' },
          '50%': { opacity: '0.2' },
          '100%': { opacity: '0.1'}
        }
      },
      animation: {
        'image-loading': 'imageLoad 1.5s linear infinite'
      }, 
      backdropBlur: {
        'xsm': '2.5px',
      },
      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(270px, 1fr))',
      }
    },
  },
  plugins: [],
}
export default config
