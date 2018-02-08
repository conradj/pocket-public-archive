import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <div
    style={{
      background: "red",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Articles I've read
        </Link>
        <small>
          <Link
            to="/about"
            style={{
              color: "#424242",
              textDecoration: "none",
              float: "right",
              margin: 0,
              fontSize: "1rem"
            }}
          >
            About this site
          </Link>
        </small>
      </h1>
    </div>
  </div>
);

export default Header;
