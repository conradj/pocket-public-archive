import React from "react";
import ArticleTemplate from "./article";
import "./weekly-articles.css";
const format = require("date-fns/format");

class WeeklyArticlesTemplate extends React.Component {
  render() {
    if (this.props.data.allPocketArticle) {
      const thisWeek = parseInt(
        this.props.data.allPocketArticle.edges[0].node.readWeek
      );
      const nextWeek = thisWeek + 604800;
      const lastWeek = thisWeek - 604800;

      const weekDate = format(new Date(thisWeek * 1000), "Do MMMM YYYY");
      return (
        <div>
          <nav>
            <a href={`../${lastWeek}`}>Previous Week</a>
            {nextWeek < new Date().getTime() / 1000 ? (
              <a className="next-week" href={`../${nextWeek}`}>
                Next Week
              </a>
            ) : null}
          </nav>
          <h1>Week starting {weekDate}</h1>

          <ul className="wrapper">
            {this.props.data.allPocketArticle.edges.map((edge, index) => {
              let article = edge.node;
              if (article.title && article.url && article.word_count > 0) {
                return (
                  <ArticleTemplate key={index} {...article} index={index} />
                );
              } else {
                //console.warn("Article not loaded", article);
              }
            })}
          </ul>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default WeeklyArticlesTemplate;

export const pageQuery = graphql`
  query ArticlesWeekQuery($currentWeekFilter: Int!) {
    allPocketArticle(
      filter: { readWeek: { eq: $currentWeekFilter } }
      sort: { fields: [word_count, favorite], order: DESC }
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
