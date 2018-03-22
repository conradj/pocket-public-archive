import React from "react";
import Helmet from "react-helmet";

const SocialCard = ({ title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@conradj" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={imageUrl} />
    <meta name="twitter:image:alt" content={imageAlt} />
  </Helmet>
);

export default SocialCard;
