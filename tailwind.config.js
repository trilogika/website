module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
        "brand": {
          "50": "#E6ECFF",
          "100": "#CCDAFF",
          "200": "#99B4FF",
          "300": "#678FFE",
          "400": "#346AFE",
          "500": "#0247FE",
          "600": "#0137CB",
          "700": "#012998",
          "800": "#001B66",
          "900": "#000E33"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
}
