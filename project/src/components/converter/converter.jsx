import React from "react";
import PropTypes from "prop-types";
import FieldsGroup from "../fields-group/fields-group";
import FieldDate from "../field-date/field-date";

const Converter = (props) => {
  const {
    buyCurrency,
    buySum,
    date,
    onBuyCurrencyChange,
    onBuySumChange,
    onFormSubmit,
    onSaleCurrencyChange,
    onSaleSumChange,
    saleSum,
    saleCurrency,
  } = props;

  return (
    <section className="converter">
      <h1 className="converter__title">Конвертер валют</h1>
      <form action="#" className="convert-form" method="GET" onSubmit={onFormSubmit}>
        <FieldsGroup
          buyCurrency={buyCurrency}
          buySum={buySum}
          onBuyCurrencyChange={onBuyCurrencyChange}
          onBuySumChange={onBuySumChange}
          onSaleCurrencyChange={onSaleCurrencyChange}
          onSaleSumChange={onSaleSumChange}
          saleCurrency={saleCurrency}
          saleSum={saleSum}
        />
        <div className="convert-form__wrapper">
          <FieldDate
            date={date}
            onDateChange={(newDate) => console.log("newDate: ", newDate)}
          />
          <button className="convert-form__button button" type="submit">Сохранить результат</button>
        </div>
      </form>
    </section>
  );
}

Converter.propTypes = {
  buyCurrency: PropTypes.string.isRequired,
  buySum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onBuyCurrencyChange: PropTypes.func.isRequired,
  onBuySumChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onSaleCurrencyChange: PropTypes.func.isRequired,
  onSaleSumChange: PropTypes.func.isRequired,
  saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  saleCurrency: PropTypes.string.isRequired,
};

export default Converter;
