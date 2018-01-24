import React from "react";
import PropTypes from "prop-types";
import "./article.css";

class ArticleTemplate extends React.Component {
  render() {
    const {
      index,
      title,
      image,
      excerpt,
      url,
      favourite,
      word_count,
      articleDomain,
      domainFavicon
    } = this.props;
    const classNames = ["article"];
    if (index === 0) {
      classNames.push("article-headline");
    }

    if (index === 1) {
      classNames.push("wide");
    }

    return (
      <li className={classNames.join(" ")}>
        <div className="article-link">
          <img className="article-link-favicon" src={domainFavicon} />
          {articleDomain}
        </div>
        <h1>{title}</h1>
        {image ? <img src={image.src} /> : null}
        <p>{excerpt}</p>
        <a href={url} target="_blank">
          Read more
        </a>
        <div className="article-metadata">
          <br />
          <small>{word_count} words</small>
          <br />
        </div>
      </li>
    );
  }
}

ArticleTemplate.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.object,
  excerpt: PropTypes.string,
  url: PropTypes.string,
  domainFavicon: PropTypes.string,
  articleDomain: PropTypes.string,
  favourite: PropTypes.bool,
  word_count: PropTypes.number
};

export default ArticleTemplate;
