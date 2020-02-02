const dotenv = require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `MCurry`,
    description: `Professional web development portfolio of Michael Curry.`,
    author: `Michael Curry`,
  },
  plugins: [
    `gatsby-plugin-recaptcha`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        pure: true,
        displayName: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MCurry`,
        short_name: `MCurry`,
        start_url: `/`,
        background_color: `#006600`,
        theme_color: `#006600`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GITHUB_PAT,
        graphQLQuery: `
        {
          user(login: "cryptofool13") {
            pinnedRepositories(first: 10) {
              edges {
                node {
                  name
                  description
                  url
                  homepageUrl
                  repositoryTopics(first: 10) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        `,
        variables: {},
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
