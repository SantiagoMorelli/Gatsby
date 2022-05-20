/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "simply recipes",
    description: "nice and clean recipes site",
    author: "Santiago Morelli",
    person: {
      name: "pedro",
      age: 33,
    },
    simpleData: ["item1", "item2"],
    complexData: [
      {
        name: "pedro",
        age: 23,
      },
      {
        name: "michael",
        age: 26,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/image`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5s93td7b8bmp`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
