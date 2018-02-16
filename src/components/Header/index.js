import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import format from "date-fns/format";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2 className="site-name">Conrad Jackson</h2>
        <h1 className="week-headline">Read Articles</h1>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
