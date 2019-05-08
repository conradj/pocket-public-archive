import React from "react";
import Helmet from "react-helmet";

const SocialCard = ({ url, title, description, imageUrl, imageAlt }) => (
  <Helmet>
    <meta name="og:type" content="article" />
    <meta name="og:headline" content={title} />
    <meta name="og:headline" content={title} />
    <meta name="og:url" content={url} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content={imageUrl} />
    <meta name="og:image:alt" content={imageAlt} />
    <meta name="og:image:width" content="1000" />
    <meta name="og:image:height" content="500" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={url} />
    <meta property="og:headline" content={title} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content={imageAlt} />
    <meta itemprop="og:headline" content={title} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@conradj" />
    <meta name="twitter:image:alt" content={imageAlt} />
  </Helmet>
);

export default SocialCard;
