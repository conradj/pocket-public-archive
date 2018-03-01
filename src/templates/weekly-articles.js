import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ArticleTemplate from "./article";
import "./weekly-articles.css";
import FlipMove from "react-flip-move";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCaretLeft from "@fortawesome/fontawesome-free-solid/faCaretLeft";
import faCaretRight from "@fortawesome/fontawesome-free-solid/faCaretRight";

const format = require("date-fns/format");
const startOfWeek = require("date-fns/start_of_week");

class WeeklyArticlesTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sortType: "date" };
  }

  render() {
    console.log("props", this.props.location.search);
    const renderForScreenshot = this.props.location.search === "?screenshot";
    let totalWords = 0;
    let totalArticles = 0;
    let favouriteArticles = 0;
    let thisWeek = Date.parse(startOfWeek(new Date())) / 1000;
    const isData = this.props.data && this.props.data.allPocketArticle;
    const sortType = this.state.sortType;
    let data;
    if (isData) {
      data = this.props.data.allPocketArticle.edges.sort(function(a, b) {
        switch (sortType) {
          case "length":
            return a.node.word_count - b.node.word_count;
            break;
          case "favourites":
            return b.node.favourite - a.node.favourite;
            break;
          case "date":
          default:
            return a.node.time_read - b.node.time_read;
        }
      });
      data = renderForScreenshot ? [data[0]] : data;
      thisWeek = parseInt(data[0].node.readWeek);
    }

    const nextWeek = thisWeek + 604800;
    const lastWeek = thisWeek - 604800;
    const weekDate = format(new Date(thisWeek * 1000), "Do MMMM YYYY");

    const articleList = isData ? (
      <FlipMove
        staggerDurationBy={100}
        duration={500}
        enterAnimation="fade"
        leaveAnimation="fade"
        className="wrapper"
      >
        {data.map((edge, index) => {
          let article = edge.node;
          if (article.title && article.url && article.word_count > 0) {
            totalWords += article.word_count;
            totalArticles++;
            favouriteArticles += article.favourite ? 1 : 0;
            return (
              <ArticleTemplate key={article.title} {...article} index={index} />
            );
          } else {
            console.warn("Article not loaded", article);
          }
        })}
      </FlipMove>
    ) : (
      <div>No Articles read yet this week</div>
    );

    const readTime = parseInt(totalWords / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";

    return (
      <div className="page-main-container">
        <header className="week-header">
          <nav className="week-selector">
            <a href={`../${lastWeek}`} className="link-effect">
              <FontAwesomeIcon icon={faCaretLeft} />&nbsp;
              <span>Previous</span>
            </a>
            <span className="week-current"> Week of {weekDate} </span>
            {nextWeek < new Date().getTime() / 1000 ? (
              <span>
                <a className="next-week link-effect" href={`../${nextWeek}`}>
                  <span>Next</span>
                  &nbsp;
                  <FontAwesomeIcon icon={faCaretRight} />
                </a>
              </span>
            ) : null}
          </nav>
          <nav className="week-metadata-container">
            <div className="week-metadata">
              {totalArticles} articles | {favouriteArticles} favourited |{" "}
              {new Intl.NumberFormat().format(totalWords)} words |{" "}
              {readTimeText}
            </div>
            <div className="week-metadata-sort">
              <select
                id="sortSelect"
                onChange={event =>
                  this.setState({ sortType: event.target.value })
                }
                value={this.state.sortType}
              >
                <option value="date">By date</option>
                <option value="length">By length</option>
                <option value="favourites">Favourites first</option>
              </select>
            </div>
          </nav>
        </header>
        <div>{articleList}</div>
      </div>
    );
  }
}

WeeklyArticlesTemplate.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  has_image: PropTypes.bool,
  image: PropTypes.object,
  excerpt: PropTypes.string,
  url: PropTypes.string,
  domainFavicon: PropTypes.string,
  articleDomain: PropTypes.string,
  favourite: PropTypes.bool,
  word_count: PropTypes.number,
  time_read: PropTypes.number
};

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
