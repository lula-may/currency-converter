import React from "react";

const Converter = (props) => {
  return (
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
  );
}

export default Converter;
