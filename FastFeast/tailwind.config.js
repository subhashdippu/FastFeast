/** @type {import('tailwindcss').Config} */
import("daisyui").then((daisyui) => {
  plugins: [daisyui];
});

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#19207d",
        red: "#FF6868",
        secondary: "#555",
        prigmayBG: "#FCFCFC",
      },
    },
  },
  //  plugins: [daisyui];
  plugins: [require("daisyui")],
};
