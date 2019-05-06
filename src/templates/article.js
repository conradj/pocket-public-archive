import React from "react";
import PropTypes from "prop-types";
import "./article.css";
import format from "date-fns/format";
// import PocketButton from "../components/PocketButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";

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

    if (!has_image) {
      classNames.push("article-no-image");
    }

    const readTime = parseInt(word_count / 275);
    const readTimeText = readTime < 2 ? "1 minute" : readTime + " minutes";
    const style = { zIndex: 100 - index };
    return (
      <div id={url} className={classNames.join(" ")} style={style}>
        <div className="article-domain">
          <img
            className="article-domain-favicon"
            src={domainFavicon}
            alt={`${articleDomain} favicon`}
          />
          {articleDomain}
        </div>
        <a
          href={url}
          target="_blank"
          onClick={event => this.saveGAEvent(event)}
          className="article-link"
          rel="noopener noreferrer"
        >
          <h2 className="article-title">{title}</h2>
        </a>
        <div className="article-metadata">
          <small>
            {new Intl.NumberFormat().format(word_count)} words | {readTimeText}{" "}
            <span className="article-metadata-read-time">
              | {format(new Date(time_read * 1000), "dddd ha")}
            </span>
            {favourite ? " | Favourited" : ""}
          </small>
          {/* <PocketButton url={url} count="horizontal" /> */}
        </div>

        {image ? (
          <div className="article-image">
            <a
              href={url}
              target="_blank"
              onClick={event => this.saveGAEvent(event)}
              className="article-link"
              style={{
                backgroundImage: `url(${image.src.replace(
                  /^http:\/\//i,
                  "https://"
                )})`
              }}
              rel="noopener noreferrer"
            >
              &nbsp;
            </a>
            <img
              onError={e => {
                e.target.src =
                  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                e.target.alt = "";
                e.target.style.display = "none";
              }}
              src={image.src.replace(/^http:\/\//i, "https://")}
              alt={title}
            />
          </div>
        ) : null}
        <p className="article-excerpt">{excerpt}</p>
        <div className="article-readmore-container">
          <a
            href={url}
            target="_blank"
            onClick={event => this.saveGAEvent(event)}
            className="link-effect"
            rel="noopener noreferrer"
          >
            <span>Read more</span>
            &nbsp;<FontAwesomeIcon icon={faExternalLinkSquareAlt} />
          </a>
        </div>
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
