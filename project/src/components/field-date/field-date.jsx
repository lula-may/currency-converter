import React from 'react';
import PropTypes from 'prop-types';

function FieldDate(props) {
  const {children} = props;
  return (
    <p className="convert-form__field field">
      <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
      {children}
    </p>
  );
}

FieldDate.propTypes = {
  children: PropTypes.node,
};

export default FieldDate;
