import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ArticleTemplate from "./article";
import Metadata from "./metadata";
import Navigation from "../components/WeekNav";
import SocialCard from "../components/SocialCard";
import format from "date-fns/format";
import startOfWeek from "date-fns/start_of_week";

import "./weekly-articles.css";

class WeeklyArticlesTemplate extends React.Component {
  constructor(props) {
    super(props);
    const renderForScreenshot = this.props.location.search === "?screenshot";
    this.state = {
      renderForScreenshot: renderForScreenshot
    };
  }

  render() {
    const { renderForScreenshot } = this.state;
    console.log(this.props.location.href);
    let totalWords = 0;
    let totalArticles = 0;
    let favouriteArticles = 0;
    let thisWeek = parseInt(
      Date.parse(format(startOfWeek(new Date()), "YYYY-MM-DDT00:00:00.000")) /
        1000
    );
    const isData = this.props.data && this.props.data.allPocketArticle;
    let data;
    if (isData) {
      data = this.props.data.allPocketArticle.edges.sort((a, b) => {
        if (b.node.favourite < a.node.favourite) {
          return -1;
        }

        if (b.node.favourite > a.node.favourite) {
          return 1;
        }
        return b.node.word_count - a.node.word_count;
      });
      thisWeek = parseInt(data[0].node.readWeek);
    }
    const weekDate = format(new Date(thisWeek * 1000), "Do MMMM YYYY");

    const articleList = isData ? (
      data.map((edge, index) => {
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
        return null;
      })
    ) : (
      <div>No Articles read yet this week</div>
    );

    const readTime = parseInt(totalWords / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";
    data = renderForScreenshot ? [data[0]] : data;
    return (
      <Layout showCTA={true}>
        <div>
          <SocialCard
            url={`https://conradj.co.uk/weeklyarticles/${thisWeek}`}
            title={`Week of ${weekDate}: Stories I've read`}
            description={`${totalArticles} articles, ${new Intl.NumberFormat().format(
              totalWords
            )} words`}
            imageUrl={`https://puppeteer-screenshot.conradsjackson.now.sh/https://conradj.co.uk/weeklyreads/${thisWeek}/summary`}
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
                />
              </header>
              <div>{articleList}</div>
            </div>
          </div>
        </div>
      </Layout>
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
