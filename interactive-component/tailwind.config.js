/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vdb:"hsl(216, 12%, 8%)",
        db: "hsl(213, 19%, 18%)",
        mg: "hsl(216, 12%, 54%)",
        lg: "hsl(217, 12%, 63%)",
        orange: "hsl(25, 97%, 53%)"
      }
    },
  },
  plugins: [],
}

