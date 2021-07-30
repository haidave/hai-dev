module.exports = {
  siteMetadata: {
    title: `hai.dev`,
    description: `frontend developer based in Prague who is looking for a new challenge right now`,
    image: "/hai-dev-icon.png", // Path to your image you placed in the 'static' folder
    author: `@haidave`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true, // true for debugging
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hai.dev | frontend developer`,
        short_name: `hai.dev`,
        start_url: `/`,
        background_color: `#0e0520`,
        theme_color: `#0e0520`,
        display: `minimal-ui`,
        icon: `src/images//hai-dev-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
