import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const NotFound = () => {
  return (
  <Fragment>
    <header className="page__header main-header">
      <div className="main-header__wrapper">
          <img className="logo__image" src="img/logo.svg" width="150" height="25" alt="Логотип Лига Банк" />
      </div>
    </header>
    <div className="converter">
      <h1 className="converter__title"> 404. Страница не найдена.</h1>
      <Link to={AppRoute.ROOT}> Вернуться на страницу конвертации валют</Link>
    </div>
  </Fragment>
  );
};

export default NotFound;
