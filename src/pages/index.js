import React from "react";
import Helmet from "react-helmet";

const IndexPage = () => {
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
