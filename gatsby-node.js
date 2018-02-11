/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

const startOfWeek = require("date-fns/start_of_week");
const endOfWeek = require("date-fns/end_of_week");
const getTime = require("date-fns/get_time");
var format = require("date-fns/format");
// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const readTemplate = path.resolve(`src/templates/read-history.js`);
    const weeklyArticlesTemplate = path.resolve(
      `src/templates/weekly-articles.js`
    );
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allPocketArticle(sort: { fields: readWeek }) {
              edges {
                node {
                  id
                  url
                  title
                  favourite
                  excerpt
                  is_article
                  is_index
                  has_video
                  has_image
                  word_count
                  time_read
                  readWeek
                  articleDomain
                  domainFavicon
                  image {
                    item_id
                    src
                    width
                    height
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // default to create a page for this week in case there are no articles
        let firstArticleReadTime = format(new Date(), "X");

        if (
          result.data &&
          result.data.allPocketArticle &&
          result.data.allPocketArticle.edges
        ) {
          // if there are results then we'll create a page per week starting from that first article
          firstArticleReadTime = parseInt(
            result.data.allPocketArticle.edges[0].node.time_read
          );
        }
        // first week to create
        let startOfWeekTime = parseInt(
          format(startOfWeek(new Date(firstArticleReadTime * 1000)), "X")
        );

        // get all weeks up till now
        while (startOfWeekTime < parseInt(format(new Date(), "X"))) {
          createPage({
            path: startOfWeekTime,
            component: weeklyArticlesTemplate,
            layout: `index`,
            context: {
              currentWeekFilter: startOfWeekTime
            }
          });
          // get next week timestamp
          startOfWeekTime = startOfWeekTime + 604800;
        }
      })
    );
  });
};
