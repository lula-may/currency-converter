import React from "react";
import PropTypes from "prop-types";

const FieldDate = ({children}) => {
  return (
    <p className="convert-form__field field">
      <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
      {children}
    </p>
  );
};

FieldDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default FieldDate;
