require("dotenv-safe").load();

module.exports = {
  siteMetadata: {
    title: "Articles I've read"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-pocket",
      options: {
        consumerKey: process.env.POCKET_CONSUMER_KEY,
        accessToken: process.env.POCKET_ACCESS_TOKEN,
        weeksOfHistory: process.env.WEEKS_OF_HISTORY,
        apiMaxRecordsToReturn: process.env.API_MAX_RECORDS,
        getCurrentWeekOnly: process.env.GET_CURRENT_WEEKS_ARTICLES_ONLY
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true
      }
    }
  ],
  pathPrefix: `/weeklyreads`
};
