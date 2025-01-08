import type { Config } from "tailwindcss";

const config:Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        md:'2rem',
        lg: '3rem',
        xl: '5rem',
        '2xl': '8rem',
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myColor1: '#123669',
        myColor2: '#0B3570',
        colorOrange: '#F99F38',
        colorGrey: '#0D1B38',
        colorGreen: '#1ABC9C',
        whiteSnow: '#F5FEFD',
        whitePearl: '#FBFCF8',
        whiteCotton: '#FBFBF9',
        whiteChiffon: '#FBFAF2',
        whitePowder: '#FBFCFA',
        whiteFrost: '#FCFBFC',
        whiteSalt: '#F8EEEC',
        whitePorcelain:'#FFFEFC',
        whiteRice:'#FAF5EF',
        whiteDaisy:'#FAFAFA'
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

export default config;
