/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        "aimy-teal": "#6FDFE2",
        "aimy-purple": "#B799FF",
        "aimy-text": "#474747",
        "aimy-gray": "rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "gradient-aimy": "linear-gradient(90deg, #6FDFE2 0%, #B799FF 100%)",
        "gradient-aimy-vertical":
          "linear-gradient(180deg, rgba(183, 153, 255, 0.05) 0%, rgba(111, 223, 226, 0.05) 100%)",
        "gradient-aimy-hover":
          "linear-gradient(90deg, #B799FF 0%, #6FDFE2 100%)",
        "gradient-aimy-text":
          "linear-gradient(135deg, #6FDFE2 0%, #B799FF 100%)",
        "gradient-aimy-card":
          "linear-gradient(135deg, rgba(111, 223, 226, 0.1) 0%, rgba(183, 153, 255, 0.1) 100%)",
      },
      boxShadow: {
        aimy: "0 8px 32px rgba(111, 223, 226, 0.1)",
      },
      borderRadius: {
        xl: "16px",
      },
      maxWidth: {
        container: "600px",
      },
    },
  },
  plugins: [],
};
