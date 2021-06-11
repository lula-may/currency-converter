/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from "react";

const Main = () => {
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

      <section className="converter">
        <h1 className="converter__title">Конвертер валют</h1>
        <form action="#" className="convert-form" method="GET">
          <div className="convert-form__wrapper">
            <div className="convert-form__field field">
              <label className="field__label" htmlFor="sale">У меня есть</label>
              <div className="field__wrapper">
                <input className="field__control field__control--input" type="number" id="sale" name="sale" defaultValue="1000" />
                <select className="field__control field__control--select" name="currency" id="currency-sale" defaultValue="rub">
                  <option value="rub">RUB</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbr">GBR</option>
                  <option value="cny">CNY</option>
                </select>
              </div>
              <label className="visually-hidden" htmlFor="currency-sale">Выберите валюту</label>
            </div>
            <img className="convert-form__sign" src="img/arrows.svg" width="50" height="34" alt="Конвертировать валюту"/>
            <div className="convert-form__field field">
              <label className="field__label" htmlFor="buy">Хочу приобрести</label>
              <div className="field__wrapper">
                <input className="field__control field__control--input" type="number" id="buy" name="buy" defaultValue="13.1234" />
                <select className="field__control field__control--select" name="currency" id="currency-buy" defaultValue="usd">
                  <option value="rub">RUB</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="gbr">GBR</option>
                  <option value="cny">CNY</option>
                </select>
              </div>
              <label className="visually-hidden" htmlFor="currency-buy">Выберите валюту</label>
            </div>
          </div>
          <div className="convert-form__wrapper">
            <p className="convert-form__field field">
              <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
              <input className="field__control field__control--input field__control--date" type="text" id="date" name="date" defaultValue="1.12.2020" />
            </p>
            <button className="convert-form__button button" type="submit">Сохранить результат</button>
          </div>
        </form>
      </section>

      <section className="history">
        <div className="history__wrapper">
          <h2 className="history__title">История конвертации</h2>
            <div className="history__container">
              <ul className="history__list history__list--left">
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
              </ul>
              <ul className="history__list history__list--right">
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
                <li className="history__item operation">
                  <span className="operation__date">25.11.2020</span>
                  <span className="operation__sum operation__sum--sale">1000 RUB</span>
                  <span className="operation__sum operation__sum--perchase">13,1234 USD</span>
                </li>
              </ul>
            </div>
            <button className="history__button button" type="button">Очистить историю</button>
        </div>
      </section>
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

export default Main;
