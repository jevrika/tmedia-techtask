import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx,css,scss}', './src/components/**/*.{js,ts,jsx,tsx,mdx,css,scss}', './src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}'],
  theme: {
    extend: {
      colors: {
        'primary' : '#F0F1F4',
        'secondary' :'#E2E3E9',
        'text-primary': '#C5C7D3',
        'text-secondary': '#5C5F70',
        'navbar-primary': '#C5C7D3',
        'navbar-active': '#3498DB',
        'navbar-background' : '#181e34',
        'header-background' : '#181e34',
        'button-primary' : '#F0F1F4',
        'button-secondary' : '#D6D8E0',
        'button-active': '#3498DB',
        'device-content-background' : '#F0F1F4',
        'device-background' : '#d6d8e0',
        'profile-background' : '#9FA6C1',
        'online-status-color' : "#0E9700",
        'offline-status-color' : "#FE0006",
        'number-background': '#F0F1F4',
        'active-number-background' : '#D6EFFF',
        'border-primary' : '#d6d8e0',
        'device-details-background': '#FFFFFF'

      },
    },
  },
  plugins: [],
  safelist: ['fill-navbar-active', 'fill-navbar-primary'],
};
export default config;
