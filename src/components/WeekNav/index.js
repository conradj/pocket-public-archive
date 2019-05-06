import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import format from "date-fns/format";
import startOfWeek from "date-fns/start_of_week";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareLeft } from "@fortawesome/free-solid-svg-icons/faCaretSquareLeft";
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons/faCaretSquareRight";

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
          <FontAwesomeIcon icon={faCaretSquareLeft} />&nbsp;
          <span>Previous</span>
        </a>
        {nextWeek < new Date().getTime() / 1000 ? (
          <a
            className="nav-week-next next-week link-effect"
            href={`../${nextWeek}`}
          >
            <span>Next</span>
            &nbsp;
            <FontAwesomeIcon icon={faCaretSquareRight} />
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
