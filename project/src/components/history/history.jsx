import React from "react";
import OperationsList from "../operations-list/operations-list";
import {propOpertaions} from "../props";
const GROUP_COUNT = 5;

const History = (props) => {
  const {operations, onHistoryReset} = props;
  const firstGroupOperations = operations.slice(0,GROUP_COUNT);
  const secondGroupOperations = operations.slice(GROUP_COUNT);
  return (
      <section className="history">
        <div className="history__wrapper">
          <h2 className="history__title">История конвертации</h2>
            <div className="history__container">
              <OperationsList
                className="history__list history__list--left"
                operations = {firstGroupOperations}
              />
              <OperationsList
                className="history__list history__list--right"
                operations={secondGroupOperations}
              />
            </div>
            <button className="history__button button" onClick={onHistoryReset} type="button">Очистить историю</button>
        </div>
      </section>
  );
}

History.propTypes = {
  operations: propOpertaions
};

export default History;
