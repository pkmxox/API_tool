export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#0B0F14',
          secondary: '#121821',
        },
        text: {
          primary: '#E6EDF3',
          secondary: '#9BA7B4',
        },
        accent: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
        },
        status: {
          success: '#22C55E',
          error:   '#EF4444',
          warning: '#F59E0B',
        },
        border: '#1F2937',
        method: {
          get:    '#22C55E',
          post:   '#F59E0B',
          put:    '#3B82F6',
          patch:  '#A855F7',
          delete: '#EF4444',
        },
      },
    },
  },
  plugins: [],
}