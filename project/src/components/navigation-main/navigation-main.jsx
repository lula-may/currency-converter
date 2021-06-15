import React from "react";
import {Link} from "react-router-dom";
import {NAVIGATION_LINKS} from "../../const";
import {propLink} from "../props";

const NavigationMain = (props) => {
  const {currentPage} = props;

  return (
    <nav className="main-header__nav main-nav">
      <ul className="main-nav__list">
        {NAVIGATION_LINKS.map(({link, title}) => (
        <li key={link} className="main-nav__item">
          {(currentPage.title === title)
            ? <span className="main-nav__link main-nav__link--current">{title}</span>
            : <Link to={link} className="main-nav__link">{title}</Link>}
        </li>
        ))}
      </ul>
    </nav>
  );
};

NavigationMain.propTypes = {
  currentPage: propLink
};

export default NavigationMain;
