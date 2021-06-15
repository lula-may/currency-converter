import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const Hero = () => {
  return (
    <article className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">Лига Банк</h2>
        <p className="hero__text">Кредиты на любой случай</p>
        <Link className="hero__button button" to={AppRoute.CREDIT}>Рассчитать кредит</Link>
      </div>
    </article>
  );
};

export default Hero;
