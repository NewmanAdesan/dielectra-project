import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
