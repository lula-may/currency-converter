import React from 'react';
import PropTypes from 'prop-types';
import FieldCurrency from '../field-currency/field-currency';

function FieldsGroup(props) {
  const {
    onPerchaseCurrencyChange,
    onPerchaseSumChange,
    onSaleCurrencyChange,
    onSaleSumChange,
    perchaseCurrency,
    perchaseSum,
    saleCurrency,
    saleSum,
  } = props;

  return (
    <div className="convert-form__wrapper">
      <FieldCurrency
        name="sale"
        labelText="У меня есть"
        currency={saleCurrency}
        value={saleSum}
        onCurrencyChange={onSaleCurrencyChange}
        onValueChange={onSaleSumChange}
      />
      <img className="convert-form__sign" src="img/arrows.svg" width="50" height="34" alt="Конвертировать валюту"/>
      <FieldCurrency

        name="buy"
        labelText="Хочу купить"
        currency={perchaseCurrency}
        value= {perchaseSum}
        onCurrencyChange={onPerchaseCurrencyChange}
        onValueChange={onPerchaseSumChange}
      />
    </div>
  );
}

FieldsGroup.propTypes = {
  onPerchaseCurrencyChange: PropTypes.func.isRequired,
  onPerchaseSumChange: PropTypes.func.isRequired,
  onSaleCurrencyChange: PropTypes.func.isRequired,
  onSaleSumChange: PropTypes.func.isRequired,
  perchaseCurrency: PropTypes.string.isRequired,
  perchaseSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  saleCurrency: PropTypes.string.isRequired,
  saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FieldsGroup;
