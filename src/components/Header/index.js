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
              float: "left"
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
                Articles I read
              </Link>
            </h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            padding: "0rem 1.0875rem"
          }}
        >
          <Link
            to="/about"
            style={{
              color: "#bfbdc1",
              textDecoration: "none",
              margin: 0,
              fontSize: "1rem"
            }}
          >
            What is this?
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object
};

export default Header;
