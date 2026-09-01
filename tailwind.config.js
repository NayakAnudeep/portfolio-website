/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Single warm-neutral family; one accent.
        'bg': '#f5f1ea',
        'bg-2': '#efeae0',
        'surface': '#faf8f4',
        'fg': '#1a1816',
        'muted': '#6b635a',
        'muted-2': '#8b8278',
        'hair': '#e1dacb',
        'hair-2': '#d6cebd',
        'accent': '#b8502e',
        'accent-ink': '#7a3318',
      },
      fontFamily: {
        'serif': ['Instrument Serif', 'Times New Roman', 'serif'],
        'sans': ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
