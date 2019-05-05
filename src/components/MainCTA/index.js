import React from "react";
import Link from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/fontawesome-free-brands/faTwitter";
import "./mainCTA.css";
const MainCTA = () => (
  <div className="cta-background">
    <div className="cta-container">
      <h4>Make your weekly digest with Readstor</h4>
      <a href="http://eepurl.com/drvaWj" target="_blank" className="cta-button">
        Register<br />
      </a>
    </div>
  </div>
);

export default MainCTA;
