/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Converter from "../converter/converter.jsx";
import History from "../history/history.jsx";
import {propOpertaions} from "../props.js";

const Main = ({rate, operations}) => {
  return (
    <Fragment>
      <header className="page__header main-header">
        <div className="main-header__wrapper">
          <a href="#" className="main-header__logo logo" aria-label="На главную">
            <img className="logo__image" src="img/logo.svg" width="150" height="25" alt="Логотип Лига Банк" />
          </a>
          <nav className="main-header__nav main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">Услуги</a>
              </li>
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">Рассчитать кредит</a>
              </li>
              <li className="main-nav__item">
                <a className="main-nav__link main-nav__link--current">Конвертер валют</a>
              </li>
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">Контакты</a>
              </li>
              <li className="main-nav__item">
                <a href="#" className="main-nav__link">Задать вопрос</a>
              </li>
            </ul>
          </nav>
          <ul className="main-header__user-nav user-nav">
            <li className="user-nav__item">
              <a href="#" className="user-nav__link">
                <svg className="user-nav__icon" width="20" height="22"><use xlinkHref="#login"></use></svg>
                <span>Войти в Интернет-банк</span>
              </a>
            </li>
          </ul>
        </div>
      </header>
    <main className="page__main">
      <article className="hero">
        <div className="hero__wrapper">
          <h2 className="hero__title">Лига Банк</h2>
          <p className="hero__text">Кредиты на любой случай</p>
          <a className="hero__button button" href="#">Рассчитать кредит</a>
        </div>
      </article>

      <Converter rate={rate} />
      <History operations={operations} />
    </main>

    <footer className="page__footer main-footer">
      <div className="main-footer__wrapper">
        <div className="main-footer__item main-footer__item--info">
          <a href="#" className="main-footer__logo logo" aria-label="На главную">
            <img className="logo__image" src="img/logo.svg" width="150" height="25" alt="Логотип Лига Банк" />
          </a>
          <div className="main-footer__info">
            <address className="main-footer__text">150015, г. Москва, ул. Московская, д. 32</address>
            <p className="main-footer__text">Генеральная лицензия Банка России №1050</p>
            <p className="main-footer__text">&copy; Лига Банк, 2019</p>
          </div>
        </div>

        <div className="main-footer__item main-footer__item--nav">
          <ul className="footer-nav">
            <li className="footer-nav__item"><a href="#" className="footer-nav__link">Услуги</a></li>
            <li className="footer-nav__item"><a href="#" className="footer-nav__link">Рассчитать кредит</a></li>
            <li className="footer-nav__item"><a href="#" className="footer-nav__link">Контакты</a></li>
            <li className="footer-nav__item"><a href="#" className="footer-nav__link">Задать вопрос</a></li>
          </ul>
        </div>

        <div className="main-footer__item contact contact--mobile">
          <a className="contact__link contact__link--short" href="tel:0904">
            <svg className="contact__icon" width="10" height="16">
              <use xlinkHref="#phone"></use>
            </svg>
            <span>*0904</span>
          </a>
          <p className="contact__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>

        <div className="main-footer__item contact contact--phone">
          <a className="contact__link contact__link--long" href="tel:+78001112233">
            <svg className="contact__icon" width="16" height="16">
              <use xlinkHref="#telephone"></use>
            </svg>
            <span>8 800 111 22 33</span>
          </a>
          <p className="contact__text">Бесплатный для всех городов России</p>
         </div>

        <div className="main-footer__item main-footer__item--social social">
          <ul className="social__list">
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Лига Банк в фейсбук">
                <svg className="icon" width="9" height="16"><use xlinkHref="#fb"></use></svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Лига Банк в Инстаграм">
                <svg className="icon" width="16" height="16"><use xlinkHref="#insta"></use></svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Лига Банк в Твиттере">
                <svg className="icon" width="16" height="13"><use xlinkHref="#twitter"></use></svg>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link" aria-label="Лига Банк на Ютюб">
                <svg className="icon" width="16" height="13"><use xlinkHref="#youtube"></use></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    </Fragment>
  );
}

Main.propTypes = {
  rate: PropTypes.object.isRequired,
  operations: propOpertaions,
};

export default Main;
