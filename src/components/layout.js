import React from "react";
import Helmet from "react-helmet";
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
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.8.1/js/all.js"
      />
    </Helmet>
    {showCTA && <MainCTA />}
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
