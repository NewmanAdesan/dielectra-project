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
        'header-bg': 'rgba(10, 10, 10, 0.5)'
      },
      height: {
        'header-mobile-height': '72px',
        'header-desktop-height': '96px'
      },
      colors: {
        'color-1': '#30ADCF',
        'color-2': '#2AE1CB'
      }
    },
  },
  plugins: [],
}
export default config
