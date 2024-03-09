/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: {
          DEFAULT: "var(--black)",
          50: "var(--black-50)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        error: {
          DEFAULT: "var(--secondary)",
          100: "var(--secondary-100)",
        },
        gray: {
          DEFAULT: "var(--gray-300)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
        },
      },
    },
  },
  plugins: ["postcss-import", "tailwindcss/nesting"],
  important: true,
};
