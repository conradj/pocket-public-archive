import React from "react";
import Link from "gatsby-link";
import format from "date-fns/format";

const Header = () => {
  const pathName = document.location.pathname.replace("/", "");
  let title = "Articles I read";
  if (!isNaN(pathName)) {
    title += " - Week of " + format(new Date(pathName * 1000), "Do MMMM YYYY");
  }

  return (
    <div
      style={{
        display: "flex",
        background: "rgb(51, 51, 51)",
        marginBottom: "1.45rem"
      }}
    >
      <a
        href="https://conradj.co.uk"
        style={{
          margin: 0,
          color: "rgb(255, 255, 255)",
          textDecoration: "none"
        }}
      >
        <div
          style={{
            margin: "0 auto",
            flex: "100px",
            width: "100px",
            height: "100%",
            backgroundColor: "rgb(18, 217, 36)",
            textAlign: "center",
            padding: "1.45rem 1.0875rem"
          }}
        >
          <h1 style={{ margin: 0 }}>CJ</h1>
        </div>
      </a>
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
              color: "rgba(255, 255, 255, 0.7)",
              textDecoration: "none"
            }}
          >
            {title}
          </Link>
        </h1>
      </div>
      <div
        style={{
          margin: "0 auto",
          textAlign: "center",
          padding: "0.45rem"
        }}
      >
        <Link
          to="/about"
          style={{
            color: "rgb(18, 217, 36)",
            textDecoration: "none",
            margin: 0,
            fontSize: "1rem"
          }}
        >
          What is this?
        </Link>
      </div>
    </div>
  );
};

export default Header;
