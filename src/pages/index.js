import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const startOfWeek = require("date-fns/start_of_week");
const format = require("date-fns/format");

const IndexPage = pluginOptions => {
  const thisWeekTime = parseInt(format(startOfWeek(new Date()), "X"));
  console.log(thisWeekTime);
  window.location = thisWeekTime;

  return (
    <div>
      <Helmet>
        <meta http-equiv="refresh" content={`0;url=${thisWeekTime}`} />;
      </Helmet>
      <a href={thisWeekTime}>This weeks articles</a>
    </div>
  );
};

export default IndexPage;
