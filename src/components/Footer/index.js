import React from "react";
import Link from "gatsby-link";

const Footer = () => (
  <div
    style={{
      borderTop: "solid 1rem #78fecf",
      paddingBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h4 style={{ margin: 0, float: "left" }}>
        Site by{" "}
        <a
          href="https://conradj.co.uk"
          style={{
            color: "#3c3a40"
          }}
        >
          Conrad Jackson
        </a>
      </h4>
      <span style={{ float: "right" }}>
        <a href="https://twitter.com/conradj" target="_blank">
          Twitter
        </a>
        |{" "}
        <a href="https://github.com/conradj" target="_blank">
          Github
        </a>
      </span>
    </div>
  </div>
);

export default Footer;
