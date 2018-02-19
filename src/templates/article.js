import React from "react";
import PropTypes from "prop-types";
import "./article.css";
import format from "date-fns/format";

class ArticleTemplate extends React.Component {
  saveGAEvent(event) {
    if (process.env.NODE_ENV === "production" && typeof ga === "function") {
      ga("send", {
        hitType: "event",
        eventCategory: event.target.hostname,
        eventAction: "read",
        eventLabel: event.target.pathname
      });
    }
  }
  render() {
    const {
      index,
      title,
      has_image,
      image,
      excerpt,
      url,
      favourite,
      word_count,
      articleDomain,
      domainFavicon,
      time_read
    } = this.props;
    const classNames = ["article"];

    if (favourite && has_image) {
      classNames.push("article-headline");
    } else if (favourite || has_image) {
      classNames.push("wide");
    }

    const readTime = parseInt(word_count / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";
    const style = { zIndex: 100 - index };
    return (
      <div id={url} className={classNames.join(" ")} style={style}>
        <div className="article-domain">
          <img className="article-domain-favicon" src={domainFavicon} />
          {articleDomain}
        </div>
        <a
          href={url}
          target="_blank"
          onClick={event => this.saveGAEvent(event)}
          className="article-link"
        >
          <h1 className="article-title">{title}</h1>
        </a>
        <div className="article-metadata">
          <small>
            {new Intl.NumberFormat().format(word_count)} words | {readTimeText}{" "}
            | {format(new Date(time_read * 1000), "dddd ha")}
            {favourite ? " | Favourited" : ""}
          </small>
        </div>
        {image ? (
          <img
            className="article-image"
            onError={e => {
              e.target.src =
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
              e.target.alt = "";
              e.target.style.display = "none";
            }}
            src={image.src}
          />
        ) : null}
        <p>{excerpt}</p>
        <a
          href={url}
          target="_blank"
          onClick={event => this.saveGAEvent(event)}
        >
          Read more
        </a>
      </div>
    );
  }
}

ArticleTemplate.propTypes = {
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

export default ArticleTemplate;
