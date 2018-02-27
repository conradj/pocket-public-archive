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
            <Link to="/" className="link-effect">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
            </Link>{" "}
            |{" "}
            <Link to="/about" className="link-effect">
              <span>about this site</span>
            </Link>
          </div>
          <div className="top-nav-middle">
            <h2 className="top-nav-title">Conrad Jackson</h2>
          </div>
          <div className="top-nav-last">
            <a
              href="https://conradj.co.uk"
              className="nav-external link-effect"
            >
              <span>conradj.co.uk</span>
              &nbsp;<FontAwesomeIcon icon={faExternalLink} />
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
