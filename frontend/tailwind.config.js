/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,jsx}",
      "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
    theme: {
      screens: {
        sm: '360px',
        md: '600px',
        lg: '1023px'
      },
      extend: {
        colors: {
          primaryText: '#313031',
          hoverBtn: '#163E32',
          hoverLink: '#0D4937',
          validationText: '#807D84'
        },
        backgroundColor: {
          bgButton: '#6E9E30'
        }
      },
    },
    plugins: [],
  }