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
        backgroundColor: '#cbd5e1', //slate-300
        titleTextColor: '#0f172a', //slate-900
        paragraphTextColor: '#0f172a', //slate-900
        linkTextColor: '#0284c7', //sky-600
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
