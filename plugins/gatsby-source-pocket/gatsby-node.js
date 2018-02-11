const startOfWeek = require("date-fns/start_of_week");
const format = require("date-fns/format");
const subWeeks = require("date-fns/sub_weeks");
const getTime = require("date-fns/get_time");
const { URL } = require("url");
const crypto = require("crypto");

const createContentDigest = obj =>
  crypto
    .createHash("md5")
    .update(JSON.stringify(obj))
    .digest("hex");

function getPocketArticles(sinceDate, pluginOptions) {
  return new Promise((resolve, reject) => {
    const GetPocket = require("node-getpocket");
    const config = {
      consumer_key: pluginOptions.consumerKey,
      access_token: pluginOptions.accessToken
    };
    const pocket = new GetPocket(config);
    let lastGeneratedDateStamp = sinceDate;
    console.info(
      "pluginOptions.getCurrentWeekOnly",
      pluginOptions.getCurrentWeekOnly
    );

    console.info(
      "process.env.GET_CURRENT_WEEKS_ARTICLES_ONLY",
      process.env.GET_CURRENT_WEEKS_ARTICLES_ONLY
    );

    console.info("process.env.TEST_VALUE", process.env.TEST_VALUE);
    console.info("process.env.TEST_VALUE", process.env.TEST_VALUE_NOPE);
    // override - usually used in prod just to update current week on a nightly update after the first full generation.
    if (pluginOptions.getCurrentWeekOnly.toLowerCase() === "y") {
      lastGeneratedDateStamp = startOfWeek(new Date());
    }

    const unixTimeToGetArticlesFrom = parseInt(
      Date.parse(lastGeneratedDateStamp) / 1000
    );

    if (isNaN(unixTimeToGetArticlesFrom)) {
      reject("set a pocket start date in options");
    }

    const params = {
      // get/retrieve/search parameters.
      // See https://getpocket.com/developer/docs/v3/retrieve for full list of available params.
      sort: "newest",
      count: parseInt(pluginOptions.apiMaxRecordsToReturn),
      detailType: "complete",
      state: "archive",
      since: unixTimeToGetArticlesFrom
    };

    pocket.get(params, function(err, resp) {
      // check err or handle the response
      if (err) {
        reject(err);
      }
      resolve(convertResultsToArticlesArray(resp));
    });
  });
}

function convertResultsToArticlesArray(pocketApiResults) {
  return Object.keys(pocketApiResults.list).map(function(value, articleIndex) {
    return pocketApiResults.list[value];
  });
}

exports.sourceNodes = async ({ boundActionCreators }, pluginOptions) => {
  const importStartDate = subWeeks(
    startOfWeek(new Date()),
    pluginOptions.weeksOfHistory
  );

  const { createNode, touchNode } = boundActionCreators;
  // get the data since the last time it was run, or from the earliest week
  const data = await getPocketArticles(importStartDate, pluginOptions);

  console.info("data loaded", data.length);
  // Process data into nodes.
  data.forEach(datum => {
    const image =
      datum.has_image && datum.image
        ? {
            item_id: datum.item_id,
            src: datum.image.src,
            width: datum.image.width,
            height: datum.image.height
          }
        : null;

    const articleDomain =
      datum.resolved_url && datum.resolved_url !== ""
        ? new URL(datum.resolved_url).hostname
        : "";

    const node = createNode({
      // Data for the node.
      id: datum.item_id,
      readWeek: parseInt(
        format(startOfWeek(new Date(parseInt(datum.time_read) * 1000)), "X")
      ),
      url: datum.resolved_url,
      title: datum.resolved_title,
      articleDomain: articleDomain,
      domainFavicon: `https://s2.googleusercontent.com/s2/favicons?domain_url=${articleDomain}`,
      favourite: datum.favorite == true,
      favorite: datum.favorite == true,
      excerpt: datum.excerpt,
      is_article: datum.is_article == true,
      is_index: datum.is_index == true,
      has_video: datum.has_video == true,
      has_image: datum.has_image == true,
      word_count: parseInt(datum.word_count),
      time_added: datum.time_added,
      time_updated: datum.time_updated,
      time_read: parseInt(datum.time_read),
      image: image,
      // Required fields.
      parent: null, //`the-id-of-the-parent-node`, // or null if it's a source node without a parent
      children: [],
      internal: {
        type: `PocketArticle`,
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(datum))
          .digest(`hex`),
        //mediaType: `text/markdown`, // optional
        content: JSON.stringify(datum) // optional
      }
    });

    touchNode(datum.item_id);
  });
};
