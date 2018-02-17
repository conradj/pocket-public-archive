import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import format from "date-fns/format";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="top-nav">
          <div className="top-nav-first">
            <Link to="/">home</Link> | <Link to="/about">about this site</Link>
          </div>
          <div className="top-nav-middle">
            <h2 className="top-nav-title">Conrad Jackson</h2>
          </div>
          <div className="top-nav-last">
            <a className="nav-external" href="https://conradj.co.uk">
              conradj.co.uk
            </a>
          </div>
        </nav>
        <div className="site-name-container">
          <h1 className="site-name">Read Articles</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
