import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby-link";
const startOfWeek = require("date-fns/start_of_week");
import format from "date-fns/format";

const IndexPage = pluginOptions => {
  const today = new Date();
  let lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);
  console.log("lastweek", lastWeek);
  const lastWeekTime = withPrefix(
    `/${parseInt(format(startOfWeek(lastWeek), "X"))}`
  );
  console.log(lastWeekTime);
  //window.location = thisWeekTime;

  return (
    <div>
      <Helmet>
        <meta http-equiv="refresh" content={`0;url=${lastWeekTime}`} />;
      </Helmet>
      <a href={lastWeekTime}>Articles read in the last week</a>
    </div>
  );
};

export default IndexPage;
