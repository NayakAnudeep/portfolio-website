/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // New color palette
        'bg': '#f5f1ea',
        'bg-2': '#efeae0',
        'fg': '#1a1816',
        'muted': '#6b635a',
        'muted-2': '#8b8278',
        'hair': '#e1dacb',
        'hair-2': '#d6cebd',
        'accent': '#b8502e',
        'accent-ink': '#7a3318',

        // Legacy colors for compatibility
        'gray-light': '#8b8278',  // mapped to muted-2
        'gray-dark': '#1a1816',   // mapped to fg
        'off-white': '#f5f1ea',   // mapped to bg
      },
      fontFamily: {
        'poppins': ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'serif': ['Instrument Serif', 'Times New Roman', 'serif'],
        'sans': ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}
