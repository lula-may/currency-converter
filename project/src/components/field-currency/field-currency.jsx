import React from 'react';
import PropTypes from 'prop-types';

function FieldCurrency(props) {
  const {name, currency, value, onCurrencyChange, onValueChange, labelText} = props;

  return (
    <div className="convert-form__field field">
      <label className="field__label" htmlFor={name}>{labelText}</label>
      <div className="field__wrapper">
        <input className="field__control field__control--input" onChange={onValueChange} type="number" id={name} name={name} min="0" step="0.0001" value={value} required />
        <select className="field__control field__control--select" onChange={onCurrencyChange} name={`currency-${name}`} id={`currency-${name}`} value={currency}>
          <option value="RUB">RUB</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="CNY">CNY</option>
        </select>
      </div>
      <label className="visually-hidden" htmlFor={`currency-${name}`}>Выберите валюту</label>
    </div>
  );
}

FieldCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FieldCurrency;
