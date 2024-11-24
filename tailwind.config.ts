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
        colorOrange: '#F99F38',
        colorGrey: '#0D1B38',
        colorGreen: '#1ABC9C'
      },
    },
  },
  plugins: [],
}

export default config;
