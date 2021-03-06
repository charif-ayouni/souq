module.exports = {
  siteMetadata: {
    title: `Souq`,
    description: `Souq est restaurant en ligne`,
    author: `Charif AYOUNI`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dishes`,
        path: `${__dirname}/dishes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categories`,
        path: `${__dirname}/categories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teams`,
        path: `${__dirname}/teams`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
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
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/souq-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fr'
      }
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: 'MTQ0MzZkOTQtYjhmNC00ZDM3LTgxMTQtZjk1Yzk0Zjc2YzBhNjM3MjYzNTU1NDk4NTA1MzM1',
      }
    }
    /*{
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://charif.netlify.app` // required!
      }
    }*/
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
