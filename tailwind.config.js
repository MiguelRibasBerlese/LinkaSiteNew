/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#8547e4',
          accent: '#B48CF0',
          black: '#0A0A0F',
          panel: '#111119',
          border: '#201F2C',
          ink: '#F4F2FB',
          muted: '#B8B5C6',
          dim: '#6B6880',
        },
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
