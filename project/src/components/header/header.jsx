import React from "react";
import {Link} from "react-router-dom";
import NavigationMain from "../navigation-main/navigation-main";
import {AppRoute} from "../../const";
import {propLink} from "../props";

const Header = (props) => {
  const {currentPage} = props;
  return (
    <header className="page__header main-header">
      <div className="main-header__wrapper">
        <Link to={AppRoute.MAIN} className="main-header__logo logo" aria-label="На главную">
          <img className="logo__image" src="img/logo.svg" width="150" height="25" alt="Логотип Лига Банк" />
        </Link>
        <NavigationMain currentPage={currentPage} />
        <ul className="main-header__user-nav user-nav">
          <li className="user-nav__item">
            <Link to={AppRoute.LOGIN} className="user-nav__link">
              <svg className="user-nav__icon" width="20" height="22"><use xlinkHref="#login"></use></svg>
              <span>Войти в Интернет-банк</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  currentPage: propLink,
};


export default Header;
