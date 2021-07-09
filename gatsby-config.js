module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby with strapi deployed on netlify",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://strapi-deployed-on-heroku.herokuapp.com" // production environement
          : "http://localhost:1337", // developement environement
        queryLimit: 1000,
        collectionTypes: [`article`, `user`], // modify 🍋
        singleTypes: [], // modify 🍓
      },
    },
  ],
};
