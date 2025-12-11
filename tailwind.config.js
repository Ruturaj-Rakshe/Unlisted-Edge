/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addVariant }) {
      // Clean theme variants
      addVariant('theme-18-25-male', '[data-theme="theme-18-25-male"] &');
      addVariant('theme-18-25-female', '[data-theme="theme-18-25-female"] &');
      addVariant('theme-26-35-male', '[data-theme="theme-26-35-male"] &');
      addVariant('theme-26-35-female', '[data-theme="theme-26-35-female"] &');
      addVariant('theme-40plus-male', '[data-theme="theme-40plus-male"] &');
      addVariant('theme-40plus-female', '[data-theme="theme-40plus-female"] &');
    }
  ],
}