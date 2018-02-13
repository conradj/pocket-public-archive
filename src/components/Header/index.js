import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import format from "date-fns/format";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div style={{ background: "#3c3a40" }}>
          <div
            style={{
              width: "100px",
              float: "left",
              marginRight: "1rem"
            }}
          >
            <a
              href="https://conradj.co.uk"
              style={{
                color: "#bfbdc1",
                textDecoration: "none"
              }}
            >
              <div
                style={{
                  backgroundColor: "#d81159",
                  textAlign: "center",
                  padding: "1.45rem 1.0875rem"
                }}
              >
                <h1 style={{ margin: 0 }}>CJ</h1>
              </div>
            </a>
          </div>
          <div style={{ float: "right" }}>
            <Link
              to="/about"
              style={{
                color: "#3c3a40",
                textDecoration: "none",
                margin: 0,
                fontSize: "1rem"
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffbc42",
                  textAlign: "center",
                  padding: "1.45rem 1.0875rem"
                }}
              >
                <h1 style={{ margin: "0px" }}>?</h1>
              </div>
            </Link>
          </div>
          <div
            style={{
              margin: "0px auto",
              maxWidth: "960px",
              padding: "1.45rem 1.0875rem"
            }}
          >
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: "#bfbdc1",
                  textDecoration: "none"
                }}
              >
                Reading History
              </Link>
            </h1>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
