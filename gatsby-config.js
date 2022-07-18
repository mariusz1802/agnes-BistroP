module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    "gatsby-theme-gallery",

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/bg`, // wherever background images are stored
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "agnes-bistro",
      },
    },
    "gatsby-plugin-sitemap",

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `oleo script\: 300, 700`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
