/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fih: {
          "hub-blue": "#00AEEF",
          "deep-black": "#1A1A1A",
          "impact-teal": "#008080",
          "inclusive-white": "#FFFFFF",
          "breathable-gray": "#F8F9FA",
          "action-gold": "#FFD700",
          black: "#000000",
          white: "#FFFFFF",
          silver: "#D3D3D3",
          charcoal: "#2F2F2F", // Keeping existing just in case, but preference is deep-black
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
        heading: ["var(--font-montserrat)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"], 
      },
      borderRadius: {
        "3xl": "24px", 
        "2xl": "16px",
        xl: "12px",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 10px rgba(0, 174, 239, 0.5), 0 0 20px rgba(0, 174, 239, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'tech-pattern': "url('/tech-pattern.png')", // Placeholder for now
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
