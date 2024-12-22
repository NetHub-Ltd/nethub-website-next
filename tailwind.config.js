/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("@tailwindcss/typography"), // Include the typography plugin
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        primary: "#4f46e5",
        accent: "#0866ff",
        darkGray: "#333333",
        secondaryText: "#6b7280",
        hoverBlue: "#1d4ed8",
      },
    },
  },
};
