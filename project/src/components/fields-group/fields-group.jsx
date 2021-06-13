import React from "react";
import FieldCurrency from "../field-currency/field-currency";

const FieldsGroup = (props) => {
  const {
    buyCurrency,
    buySum,
    onBuyCurrencyChange,
    onBuySumChange,
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
        currency={buyCurrency}
        value= {buySum}
        onCurrencyChange={onBuyCurrencyChange}
        onValueChange={onBuySumChange}
      />
    </div>
  )
}

export default FieldsGroup;
