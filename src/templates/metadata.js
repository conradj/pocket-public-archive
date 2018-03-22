import React from "react";
import PropTypes from "prop-types";
import "./metadata.css";

class Metadata extends React.Component {
  render() {
    const {
      totalArticles,
      favouriteArticles,
      totalWords,
      readTimeText,
      children
    } = this.props;
    return (
      <nav className="metadata-container">
        <div className="metadata">
          {totalArticles} articles | {favouriteArticles} favourited |{" "}
          {new Intl.NumberFormat().format(totalWords)} words | {readTimeText}
        </div>
        {children}
      </nav>
    );
  }
}

Metadata.propTypes = {
  totalArticles: PropTypes.number,
  favouriteArticles: PropTypes.number,
  totalWords: PropTypes.number,
  readTimeText: PropTypes.number,
  children: PropTypes.object
};

export default Metadata;
