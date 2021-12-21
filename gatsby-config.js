require("dotenv").config({ path: ".env" })

module.exports = {
  siteMetadata: {
    title: `Purple`,
    description: `purple description.`,
    author: `@purplesfn`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "purplesfn",
        accessToken: `${process.env.API_KEY}`,
        linkResolver:
          ({ node, key, value }) =>
          post =>
            `/${post.uid}`,
        schemas: {
          post: require("./custom_types/post.json"),
          category: require("./custom_types/category.json"),
          tag: {},
        },
      },
    },
  ],
}
