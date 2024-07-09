import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import containerQueries from '@tailwindcss/container-queries'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono]
      },
      animation: {
        'spin-10': 'spin 10s linear infinite'
      },
      screens: {
        xs: '480px',
        '3xl': '1920px'
      },
      containers: {
        '2xs': '16rem'
      },
      colors: {}
    }
  },
  plugins: [containerQueries]
} satisfies Config
