module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      spacing: {
        '7/10': '70%',
      },

      colors: {
        primaryColor: '#0284c7', //sky-600
        backgroundColor: '#f1f5f9', //slate-100
        titleTextColor: '#0f172a', //slate-900
        paragraphTextColor: '#0f172a', //slate-900
        linkTextColor: '#0369a1', //sky-700
        linkTextColorHover: '#075985', //sky-800
        linkTextColorActive: '#0c4a6e', //sky-900
        linkIconColor: '#0f172a', //slate-900
        linkIconColorHover: '#0284c7', //sky-600
        linkIconColorActive: '#075985', //sky-800
      },
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}
