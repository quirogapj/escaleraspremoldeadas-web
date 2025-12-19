import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B11226',
        'primary-dark': '#8F0F1F',
        accent: '#8F0F1F',
        sand: '#F2F2F2',
        divider: '#D1D5DB',
        charcoal: '#1F2933',
        muted: '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
