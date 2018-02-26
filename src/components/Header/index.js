import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import format from "date-fns/format";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";
import faExternalLink from "@fortawesome/fontawesome-free-solid/faExternalLinkSquareAlt";

import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="top-nav">
          <div className="top-nav-first">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="fa-noline" />
            </Link>{" "}
            | <Link to="/about">about this site</Link>
          </div>
          <div className="top-nav-middle">
            <h2 className="top-nav-title">Conrad Jackson</h2>
          </div>
          <div className="top-nav-last">
            <a href="https://conradj.co.uk" className="nav-external">
              conradj.co.uk
              <span className="fa-noline">
                &nbsp;<FontAwesomeIcon icon={faExternalLink} />
              </span>
            </a>
          </div>
        </nav>
        <div className="site-name-container">
          <h1 className="site-name">Weekly Digest</h1>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
