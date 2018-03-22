import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import ArticleTemplate from "./article";
import Metadata from "./metadata";
import FlipMove from "react-flip-move";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCaretLeft from "@fortawesome/fontawesome-free-solid/faCaretLeft";
import faCaretRight from "@fortawesome/fontawesome-free-solid/faCaretRight";
import Navigation from "../components/WeekNav";
import SocialCard from "../components/SocialCard";

const format = require("date-fns/format");
const startOfWeek = require("date-fns/start_of_week");

import "./weekly-articles.css";

class WeeklyArticlesTemplate extends React.Component {
  constructor(props) {
    super(props);
    console.log("ctor props", this.props.location.search);
    const renderForScreenshot = this.props.location.search === "?screenshot";
    console.log("renderForScreenshot", renderForScreenshot);
    this.state = {
      sortType: "favourites",
      renderForScreenshot: renderForScreenshot
    };
  }

  render() {
    const { renderForScreenshot } = this.state;
    console.log("renderForScreenshot", renderForScreenshot);
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
          case "date":
            return a.node.time_read - b.node.time_read;
            break;
          case "favourites":
          default:
            if (b.node.favourite < a.node.favourite) {
              return -1;
            }

            if (b.node.favourite > a.node.favourite) {
              return 1;
            }
            return b.node.word_count - a.node.word_count;
        }
      });
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
    data = renderForScreenshot ? [data[0]] : data;
    return (
      <div>
        <SocialCard
          title={`Week of ${weekDate}: Stories I've read`}
          description={`${totalArticles} articles, ${new Intl.NumberFormat().format(
            totalWords
          )} words`}
          imageUrl={`https://conradj.co.uk/weeklyreads/${thisWeek}.png?${Date.parse(
            new Date()
          )}`}
          imageAlt={`Week of ${weekDate}: Stories read by @conradj. ${totalArticles} articles, ${new Intl.NumberFormat().format(
            totalWords
          )} words`}
        />
        <div
          className={`week-container ${
            renderForScreenshot ? "screenshot" : ""
          }`}
        >
          <Navigation currentWeek={thisWeek} />
          <div className="page-main-container">
            <header className="week-header">
              <Metadata
                totalArticles={totalArticles}
                favouriteArticles={favouriteArticles}
                totalWords={totalWords}
                readTimeText={readTimeText}
              >
                <div className="week-metadata-sort">
                  <select
                    id="sortSelect"
                    onChange={event =>
                      this.setState({ sortType: event.target.value })
                    }
                    value={this.state.sortType}
                  >
                    <option value="favourites">Favourites first</option>
                    <option value="date">By date</option>
                    <option value="length">By length</option>
                  </select>
                </div>
              </Metadata>
            </header>
            <div>{articleList}</div>
          </div>
        </div>
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
