import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import format from "date-fns/format";
import startOfWeek from "date-fns/start_of_week";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCaretLeft from "@fortawesome/fontawesome-free-solid/faCaretSquareLeft";
import faCaretRight from "@fortawesome/fontawesome-free-solid/faCaretSquareRight";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";
import faHelp from "@fortawesome/fontawesome-free-solid/faQuestionCircle";
import faExternalLink from "@fortawesome/fontawesome-free-solid/faExternalLinkSquareAlt";

import "./navigation.css";

class Navigation extends React.Component {
  render() {
    const { currentWeek } = this.props;
    const nextWeek = currentWeek + 604800;
    const lastWeek = currentWeek - 604800;
    const currentWeekDate = format(
      new Date(currentWeek * 1000),
      "Do MMMM YYYY"
    );
    return (
      <nav className="navigation-week">
        <div className="nav-week-title">{currentWeekDate}</div>
        <a href={`../${lastWeek}`} className="nav-week-previous link-effect">
          <FontAwesomeIcon icon={faCaretLeft} />&nbsp;
          <span>Previous</span>
        </a>
        {nextWeek < new Date().getTime() / 1000 ? (
          <a
            className="nav-week-next next-week link-effect"
            href={`../${nextWeek}`}
          >
            <span>Next</span>
            &nbsp;
            <FontAwesomeIcon icon={faCaretRight} />
          </a>
        ) : null}
      </nav>
    );
  }
}

Navigation.propTypes = {
  currentWeek: PropTypes.number
};

export default Navigation;
