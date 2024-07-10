import containerQueries from '@tailwindcss/container-queries'
import { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

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
      colors: {
        primary: {
          DEFAULT: '#000000',
          50: '#B8B8B8',
          100: '#ADADAD',
          200: '#999999',
          300: '#858585',
          400: '#707070',
          500: '#5C5C5C',
          600: '#474747',
          700: '#333333',
          800: '#1F1F1F',
          900: '#0A0A0A',
          950: '#000000'
        },
        secondary: {
          DEFAULT: '#2C2654',
          50: '#3A3474',
          100: '#393371',
          200: '#362F6A',
          300: '#322C63',
          400: '#2F295B',
          500: '#2C2654',
          600: '#252046',
          700: '#1E1938',
          800: '#16132A',
          900: '#0F0D1C',
          950: '#0B0915'
        },
        success: {
          DEFAULT: '#10B981',
          50: '#8CF5D2',
          100: '#79F3CB',
          200: '#53F0BC',
          300: '#2EEDAE',
          400: '#13DF9B',
          500: '#10B981',
          600: '#0C855D',
          700: '#075239',
          800: '#031E15',
          900: '#000000',
          950: '#000000'
        },
        warning: {
          DEFAULT: '#EABB1F',
          50: '#FAEEC7',
          100: '#F8E8B4',
          200: '#F5DD8F',
          300: '#F1D26A',
          400: '#EEC644',
          500: '#EABB1F',
          600: '#BF9712',
          700: '#8C6E0D',
          800: '#594608',
          900: '#251D03',
          950: '#0C0901'
        },
        danger: {
          DEFAULT: '#EC2222',
          50: '#FBCBCB',
          100: '#F9B9B9',
          200: '#F69393',
          300: '#F26E6E',
          400: '#EF4848',
          500: '#EC2222',
          600: '#C51111',
          700: '#910D0D',
          800: '#5E0808',
          900: '#2A0404',
          950: '#100101'
        },
        info: {
          DEFAULT: '#30CADF',
          50: '#CEF3F7',
          100: '#BDEEF5',
          200: '#9AE5EF',
          300: '#76DCEA',
          400: '#53D3E4',
          500: '#30CADF',
          600: '#1DA7B9',
          700: '#157B89',
          800: '#0E5058',
          900: '#062428',
          950: '#020E0F'
        },
        background: {
          DEFAULT: '#000000',
          50: '#B8B8B8',
          100: '#ADADAD',
          200: '#999999',
          300: '#858585',
          400: '#707070',
          500: '#5C5C5C',
          600: '#474747',
          700: '#333333',
          800: '#1F1F1F',
          900: '#0A0A0A',
          950: '#000000'
        },
        foreground: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#F1F1F1',
          200: '#D5D5D5',
          300: '#B9B9B9',
          400: '#9D9D9D',
          500: '#818181',
          600: '#656565',
          700: '#494949',
          800: '#2D2D2D',
          900: '#111111',
          950: '#030303'
        }
      }
    }
  },
  plugins: [containerQueries]
} satisfies Config
