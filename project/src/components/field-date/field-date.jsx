import React from "react";

const FieldDate = ({children}) => {
  return (
    <p className="convert-form__field field">
      <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
      {children}
    </p>
  );
};

export default FieldDate;
