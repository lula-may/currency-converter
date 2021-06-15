import React from 'react';
import PropTypes from 'prop-types';
import FieldsGroup from '../fields-group/fields-group';
import FieldDate from '../field-date/field-date';
import withDatePicker from '../../hocs/with-date-picker/with-date-picker';

const FieldDateWrapped = withDatePicker(FieldDate);

function Converter(props) {
  const {
    date,
    onDateChange,
    onFormSubmit,
    onPerchaseCurrencyChange,
    onPerchaseSumChange,
    onSaleCurrencyChange,
    onSaleSumChange,
    perchaseCurrency,
    perchaseSum,
    saleSum,
    saleCurrency,
  } = props;

  return (
    <section className="converter">
      <h1 className="converter__title">Конвертер валют</h1>
      <form action="#" className="convert-form" method="GET" onSubmit={onFormSubmit}>
        <FieldsGroup
          onPerchaseCurrencyChange={onPerchaseCurrencyChange}
          onPerchaseSumChange={onPerchaseSumChange}
          perchaseCurrency={perchaseCurrency}
          perchaseSum={perchaseSum}
          onSaleCurrencyChange={onSaleCurrencyChange}
          onSaleSumChange={onSaleSumChange}
          saleCurrency={saleCurrency}
          saleSum={saleSum}
        />
        <div className="convert-form__wrapper">
          <FieldDateWrapped
            date={date}
            onDateChange={onDateChange}
          />
          <button className="convert-form__button button" type="submit">Сохранить результат</button>
        </div>
      </form>
    </section>
  );
}

Converter.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onPerchaseCurrencyChange: PropTypes.func.isRequired,
  onPerchaseSumChange: PropTypes.func.isRequired,
  onSaleCurrencyChange: PropTypes.func.isRequired,
  onSaleSumChange: PropTypes.func.isRequired,
  perchaseCurrency: PropTypes.string.isRequired,
  perchaseSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  saleCurrency: PropTypes.string.isRequired,
};

export default Converter;
