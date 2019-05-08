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
        getCurrentWeekOnly: process.env.GET_CURRENT_WEEKS_ARTICLES_ONLY,
        stateFilterString: "archive",
        tagFilter: false,
        tagFilterString: "_untagged_",
        favouriteFilter: false,
        favouriteFilterValue: 1,
        searchFilter: false,
        searchFilterString: "t",
        domainFilter: false,
        domainFilterString: "stratechery.com"
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
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cinzel Decorative`,
          `Kadwa`,
          `Merriweather\:700`,
          `Open Sans`
          // `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ]
      }
    }
  ],
  pathPrefix: `/weeklyreads`
};
