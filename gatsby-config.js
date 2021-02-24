module.exports = {
  siteMetadata: {
    title: "obinna-timing-demo",
    description: "A place where I write about whatever I want!",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    `gatsby-plugin-mdx`,

  ],
};
