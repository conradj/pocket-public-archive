import React from "react";
import ArticleTemplate from "./article";
import "./weekly-articles.css";
const format = require("date-fns/format");
const startOfWeek = require("date-fns/start_of_week");

class WeeklyArticlesTemplate extends React.Component {
  render() {
    let totalWords = 0;
    let totalArticles = 0;
    let favouriteArticles = 0;
    let thisWeek = Date.parse(startOfWeek(new Date())) / 1000;
    const isData = this.props.data && this.props.data.allPocketArticle;
    const data = this.props.data.allPocketArticle.edges;
    if (isData) {
      thisWeek = parseInt(
        data[0].node.readWeek
      );
      console.log("data", data);
    }
    const nextWeek = thisWeek + 604800;
    const lastWeek = thisWeek - 604800;
    const weekDate = format(new Date(thisWeek * 1000), "Do MMMM YYYY");

    const articleList = isData ? (
      <ul className="wrapper">
        {data.map((edge, index) => {
          let article = edge.node;
          if (article.title && article.url && article.word_count > 0) {
            totalWords += article.word_count;
            totalArticles++;
            favouriteArticles += article.favourite ? 1 : 0;
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
          <nav className="week-selector">
            <a href={`../${lastWeek}`}>&lt; Previous</a>
            <span className="week-current"> Week of {weekDate} </span>
            {nextWeek < new Date().getTime() / 1000 ? (
              <a className="next-week" href={`../${nextWeek}`}>
                Next &gt;
              </a>
            ) : null}
          </nav>
          <small className="week-metadata">
            {totalArticles} articles | {favouriteArticles} favourited |{" "}
            {new Intl.NumberFormat().format(totalWords)} words | {readTimeText}
          </small>
        </header>
        <div className="page-main-container">{articleList}</div>
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
