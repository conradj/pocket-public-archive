import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";
import MainCTA from "./MainCTA";

const TemplateWrapper = ({ children, showCTA = false }) => (
  <div>
    <Helmet
      title="Articles I've read"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    >
      {/* <script
        defer
        src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"
      />
      <style>{fontawesome.dom.css()}</style> */}
    </Helmet>
    {showCTA && <MainCTA />}
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
