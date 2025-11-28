/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Unified background colors
        primaryBg: '#E8EEF9',
        primaryText: '#0A0A0A',
        darkBg: 'var(--bg-charcoal)',
        darkCard: 'var(--card-bg)',
        darkText: 'var(--text-off-white)',
        darkTextMuted: 'var(--text-muted)',
        accentCyan: 'var(--accent-cyan)',
        borderSoft: 'var(--border-soft)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
