import React from "react";
import Link from "gatsby-link";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTwitter from "@fortawesome/fontawesome-free-brands/faTwitter";
import "./mainCTA.css";
const MainCTA = () => (
  <nav
    style={{
      borderBottom: "solid 1px #78fecf"
    }}
  >
    <div className="cta-container">
      <h4>Make your own weekly digest</h4>
      <a href="http://eepurl.com/drvaWj" target="_blank" className="cta-button">
        Register<br />
      </a>
    </div>
  </nav>
);

export default MainCTA;
