/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a2b56",
        "primary-light": "#24386f",
        "primary-pale": "#FFF8F2",
        surface: "#f9fafb",
        accent: "#f2b8c6",
        "pastel-mint": "#CFF5D2",
        "pastel-aqua": "#C9F0F0",
        "pastel-peach": "#FFE1C2",
        "pastel-lime": "#E5F9C9",
        "pastel-coral": "#FFD5C8",
        "accent-mint": "#CFF5D2",
        "accent-lavender": "#C9F0F0",
        "accent-warm": "#FFE1C2",
        "accent-lime": "#E5F9C9",
        "accent-coral": "#FFD5C8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "paw-bounce": "pawBounce 1.2s ease-in-out infinite",
        "paw-float": "pawFloat 2.5s ease-in-out infinite",
        "intro-logo": "introLogo 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "intro-tagline": "introTagline 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.25s forwards",
        "intro-out": "introOut 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "reveal-in": "revealIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pawBounce: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-6px) scale(1.08)" },
        },
        pawFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        introLogo: {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        introTagline: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "0.85", transform: "translateY(0)" },
        },
        introOut: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(1.02)" },
        },
        revealIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
