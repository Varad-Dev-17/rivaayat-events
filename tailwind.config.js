/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purewhite: '#FFFFFF',
        gold: {
          DEFAULT: '#E5A84B',
          light: '#FCEBC2',
          soft: '#F9EAD2',
          metallic: '#D4AF37',
          dark: '#B8860B',
          deep: '#C27A23',
        },
        amber: {
          DEFAULT: '#E5A84B',
          50: '#FDF9F3',
          100: '#FBF2E3',
          200: '#F7E2C0',
          300: '#F2CE98',
          400: '#EDBA70',
          500: '#E5A84B',
          600: '#D49333',
          700: '#B57821',
        },
        rangoli: {
          bg: '#FFFDF9',
          cream: '#FAF4E8',
          border: '#EFE3D0',
          line: '#E5D5BD',
        },
        charcoal: {
          DEFAULT: '#221A15',
          soft: '#3A2E26',
          muted: '#5F5147',
          light: '#85756B',
        }
      },
      fontFamily: {
        heading: ['"Bienvenido"', '"Renatupath"', '"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Bienvenido"', '"Renatupath"', '"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'body': ['16px', { lineHeight: '1.65' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'h3': ['24px', { lineHeight: '1.25' }],
        'h2': ['34px', { lineHeight: '1.2' }],
        'h1-mobile': ['36px', { lineHeight: '1.15' }],
        'h1': ['54px', { lineHeight: '1.1' }],
      },
      maxWidth: {
        'prose-narrow': '65ch',
      }
    },
  },
  plugins: [],
};
