import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./weekly-articles-summary.css";
import Metadata from "./metadata";
import format from "date-fns/format";

class WeeklyArticlesSummaryTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalWords = 0;
    let favouriteArticles = 0;
    const isData = this.props.data && this.props.data.allPocketArticle;
    let thisWeek;
    let data;
    if (isData) {
      data = this.props.data.allPocketArticle.edges;
      thisWeek = parseInt(data[0].node.readWeek);
    }

    const currentWeekDate = format(new Date(thisWeek * 1000), "Do MMMM YYYY");
    const totalArticles = data ? data.length : 0;
    const thumbSize = Math.sqrt(1000 * 395 / totalArticles);
    const imageThumbs = isData
      ? data.map((edge, index) => {
          let article = edge.node;
          if (article.title && article.url && article.word_count > 0) {
            totalWords += article.word_count;
            favouriteArticles += article.favourite ? 1 : 0;
          }

          if ((article.has_image, article.image)) {
            return (
              <div
                key={index}
                className="metadata-image"
                style={{
                  width: `${thumbSize}px`,
                  height: `${thumbSize}px`,
                  backgroundImage: `url(${article.image.src.replace(
                    /^http:\/\//i,
                    "https://"
                  )})`
                }}
              />
            );
          }
        })
      : null;

    const readTime = parseInt(totalWords / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";

    return (
      <Layout>
        <div className="weekly-articles-summary-container">
          <div
            className="image-thumbs"
            style={{
              gridTemplateColumns: `repeat(auto-fit,minmax(${thumbSize}px,1fr))`,
              gridTemplateRows: `repeat(auto-fit,minmax(${thumbSize}px,1fr))`
            }}
          >
            {imageThumbs}
            <div className="image-overlay" />
          </div>
          <div className="weekly-summary">
            <h1>Stories for {currentWeekDate}</h1>
            <Metadata
              totalArticles={totalArticles}
              favouriteArticles={favouriteArticles}
              totalWords={totalWords}
              readTimeText={readTimeText}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default WeeklyArticlesSummaryTemplate;

export const pageQuery = graphql`
  query ArticlesWeekSummaryQuery($currentWeekFilter: Int!) {
    allPocketArticle(
      filter: { readWeek: { eq: $currentWeekFilter } }
      sort: { fields: [favorite, time_read], order: DESC }
    ) {
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
`;
