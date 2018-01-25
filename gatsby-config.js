require("dotenv-safe").load();

module.exports = {
  siteMetadata: {
    title: "My Pocket reads"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-pocket",
      options: {
        consumerKey: process.env.POCKET_CONSUMER_KEY,
        accessToken: process.env.POCKET_ACCESS_TOKEN,
        weeksOfHistory: process.env.WEEKS_OF_HISTORY,
        apiMaxRecordsToReturn: process.env.API_MAX_RECORDS
      }
    }
  ],
  pathPrefix: `/pocket-public-archive`
};