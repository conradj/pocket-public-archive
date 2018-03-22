import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Metadata from "./metadata";
import Navigation from "../components/WeekNav";
import "./weekly-articles-stats.css";

class WeeklyArticlesStatsTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let totalWords = 0;
    let totalArticles = 0;
    let favouriteArticles = 0;
    const isData = this.props.data && this.props.data.allPocketArticle;
    let thisWeek;
    let data;
    if (isData) {
      data = this.props.data.allPocketArticle.edges;
      thisWeek = parseInt(data[0].node.readWeek);
    }

    if (isData) {
      data.map((edge, index) => {
        let article = edge.node;
        if (article.title && article.url && article.word_count > 0) {
          totalWords += article.word_count;
          totalArticles++;
          favouriteArticles += article.favourite ? 1 : 0;
        }
      });
    }

    const readTime = parseInt(totalWords / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";
    return (
      <div className="weekly-articles-stats-container">
        <Navigation currentWeek={thisWeek} />
        <Metadata
          totalArticles={totalArticles}
          favouriteArticles={favouriteArticles}
          totalWords={totalWords}
          readTimeText={readTimeText}
        />
      </div>
    );
  }
}

WeeklyArticlesStatsTemplate.propTypes = {};

export default WeeklyArticlesStatsTemplate;

export const pageQuery = graphql`
  query ArticlesWeekStatsQuery($currentWeekFilter: Int!) {
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
