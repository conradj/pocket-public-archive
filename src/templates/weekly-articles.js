import React from "react";
import ArticleTemplate from "./article";
import "./weekly-articles.css";
const format = require("date-fns/format");
const startOfWeek = require("date-fns/start_of_week");

class WeeklyArticlesTemplate extends React.Component {
  render() {
    let totalWords = 0;
    let thisWeek = Date.parse(startOfWeek(new Date())) / 1000;
    const isData = this.props.data && this.props.data.allPocketArticle;
    if (isData) {
      thisWeek = parseInt(
        this.props.data.allPocketArticle.edges[0].node.readWeek
      );
    }
    const nextWeek = thisWeek + 604800;
    const lastWeek = thisWeek - 604800;
    const weekDate = format(new Date(thisWeek * 1000), "Do MMMM YYYY");

    const articleList = isData ? (
      <ul className="wrapper">
        {this.props.data.allPocketArticle.edges.map((edge, index) => {
          let article = edge.node;
          if (article.title && article.url && article.word_count > 0) {
            totalWords += article.word_count;
            return <ArticleTemplate key={index} {...article} index={index} />;
          } else {
            console.warn("Article not loaded", article);
          }
        })}
      </ul>
    ) : (
      <div>No Articles read yet this week</div>
    );

    const readTime = parseInt(totalWords / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";

    return (
      <div>
        <header className="week-header">
          <div className="head-middle">
            <small className="week-metadata">
              <a href={`../${lastWeek}`}>&lt; Previous Week</a> | Week of{" "}
              {weekDate} | {new Intl.NumberFormat().format(totalWords)} words |{" "}
              {readTimeText} |{" "}
              {nextWeek < new Date().getTime() / 1000 ? (
                <a className="next-week" href={`../${nextWeek}`}>
                  Next Week &gt;
                </a>
              ) : null}
            </small>
          </div>
        </header>
        <div className="article-list-container">{articleList}</div>
      </div>
    );
  }
}

export default WeeklyArticlesTemplate;

export const pageQuery = graphql`
  query ArticlesWeekQuery($currentWeekFilter: Int!) {
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
