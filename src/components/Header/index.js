import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons/faInfoCircle";

import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="top-nav">
          <div className="top-nav-first">
            <Link to="/thisweek" className="link-effect">
              <span>
                <FontAwesomeIcon icon={faHome} />
              </span>
            </Link>{" "}
          </div>
          <div className="top-nav-middle">
            <div className="site-name-container">
              <h1 className="site-name">Weekly Digest</h1>
            </div>
          </div>
          <div className="top-nav-last">
            <Link to="/about" className="link-effect">
              <span>
                <FontAwesomeIcon icon={faInfoCircle} />
              </span>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
