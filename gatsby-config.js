module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby with strapi deployed on netlify",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.API_URL ? "https://gatsby-strapi-heroku.herokuapp.com" : "http://localhost:1337", // production environement
        apiURL: `http://localhost:1337`, // default developement environement
        queryLimit: 1000,
        collectionTypes: [`article`, `user`], // modify 🍋
        singleTypes: [], // modify 🍓
      },
    },
  ],
};
