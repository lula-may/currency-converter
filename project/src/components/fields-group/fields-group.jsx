import React from "react";
import FieldCurrency from "../field-currency/field-currency";

const FieldsGroup = (props) => {
  const {
    perchaseCurrency,
    perchaseSum,
    onPerchaseCurrencyChange,
    onPerchaseSumChange,
    onSaleCurrencyChange,
    onSaleSumChange,
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
  )
}

export default FieldsGroup;
