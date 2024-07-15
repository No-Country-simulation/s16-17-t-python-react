/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
],
  theme: {
    extend: {
      colors: {
        primaryText: '#313031',
        hoverBtn: '#163E32'
      },
      backgroundColor: {
        bgButton: '#6E9E30'
      }
    },
  },
  plugins: [],
}

