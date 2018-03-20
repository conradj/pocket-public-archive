import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";
const startOfWeek = require("date-fns/start_of_week");
import format from "date-fns/format";

const IndexPage = pluginOptions => {
  return (
    <div className="page-main-container">
      <Helmet>
        <meta http-equiv="refresh" content={`0;url=lastweek`} />;
      </Helmet>
      <a href="lastweek">Articles read in the last week</a>
    </div>
  );
};

export default IndexPage;
