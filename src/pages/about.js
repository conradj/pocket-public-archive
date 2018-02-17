import React from "react";

const AboutPage = () => (
  <div className="page-main-container">
    <h1>What is this?</h1>
    <p>This site shows all of the articles I've read on Pocket, by week.</p>
    <p>
      Over time I plan to add more features, such as stats, and different ways
      to search and order articles.
    </p>
    <p>
      If you want something similar, send me a dm{" "}
      <a href="https://twitter.com/conradj" target="_blank">
        @conradj on Twitter
      </a>{" "}
      or{" "}
      <a
        href="https://github.com/conradj/pocket-public-archive"
        target="_blank"
      >
        fork the project
      </a>{" "}
      and crack on!
    </p>
    <p>
      I use the{" "}
      <a href="https://getpocket.com" target="_blank">
        Pocket
      </a>{" "}
      read it later app a lot. I add loads of articles, and when I get a spare
      moment, I try and use Pocket, rather than hitting Twitter or Facebook.
    </p>
    <p>
      Pocket is great, because it strips out all of the ads and other
      extraeneous parts of an article, and just gives you the text. It also
      works offline, which is a lifesaver on my daily commute, as I go through
      quite a few reception cold spots.
    </p>
  </div>
);

export default AboutPage;
