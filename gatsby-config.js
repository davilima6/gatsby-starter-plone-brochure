require('dotenv').config({
  path: '.secrets',
});

module.exports = {
  siteMetadata: {
    title: 'Plone plugin for Gatsby',
  },
  pathPrefix: '/gatsby-starter-plone-brochure',
  plugins: [
    {
      resolve: 'gatsby-source-plone',
      options: {
        baseUrl: 'http://localhost:8080/Plone/example/',
        token: process.env.TOKEN,
        logLevel: 'DEBUG',
        websocketUpdates: true,
      },
    },
    // gatsby-source-filesystem must be configured
    // to allow Plone images and files to have
    // publicURL and be downloadable from the gatsby site
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/static`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/typography',
        omitGoogleFont: false,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
