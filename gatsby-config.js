module.exports = {
  siteMetadata: {
      title: `Eric Marsh Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-138307341-1"
    }
  }]
};