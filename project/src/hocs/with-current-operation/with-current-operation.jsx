import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {generateId, getCurrentRate, convertPerchaseSum, convertSaleSum, formatDate} from "../../utils";

const withCurrentOperation = (Component) => {

  class WithCurrentOperation extends PureComponent {
    constructor(props) {
      super(props);
      const {saleSum, saleCurrency, perchaseCurrency, rate} = props;
      const currentRate = getCurrentRate(rate, saleCurrency, perchaseCurrency);

      this.state = {
        currentRate,
        perchaseSum: convertSaleSum(saleSum, currentRate),
        perchaseCurrency,
        saleSum,
        saleCurrency,
      }

      this._handleDateChange = this._handleDateChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handlePerchaseCurrencyChange = this._handlePerchaseCurrencyChange.bind(this);
      this._handlePerchaseSumChange = this._handlePerchaseSumChange.bind(this);
      this._handleSaleCurrencyChange = this._handleSaleCurrencyChange.bind(this);
      this._handleSaleSumChange = this._handleSaleSumChange.bind(this);
    }

    _handlePerchaseSumChange(evt) {
      const {currentRate} = this.state;
      const perchaseSum = Number(evt.target.value) || '';
      const saleSum = convertPerchaseSum(perchaseSum, currentRate);
      this.setState({
        perchaseSum,
        saleSum
      });
    }

    _handlePerchaseCurrencyChange(evt) {
      const {onPerchaseCurrencyChange, rate, saleCurrency, saleSum} = this.props;
      const perchaseCurrency = evt.target.value;
      const currentRate = getCurrentRate(rate, saleCurrency, perchaseCurrency);
      const perchaseSum = convertSaleSum(saleSum, currentRate);
      onPerchaseCurrencyChange(perchaseCurrency);
      this.setState({
        perchaseCurrency,
        perchaseSum,
        currentRate,
      });
    }

    _handleSaleSumChange(evt) {
      const {onSaleSumChange} = this.props;
      const {currentRate} = this.state;
      const saleSum = Number(evt.target.value) || '';
      const perchaseSum = convertSaleSum(saleSum, currentRate);
      onSaleSumChange(saleSum);
      this.setState({
        perchaseSum,
        saleSum,
      });
    }

    _handleSaleCurrencyChange(evt) {
      const {onSaleCurrencyChange, rate,perchaseCurrency, saleSum} = this.props;
      const saleCurrency = evt.target.value;
      const currentRate = getCurrentRate(rate, saleCurrency, perchaseCurrency);
      const perchaseSum = convertSaleSum(saleSum, currentRate);
      onSaleCurrencyChange(saleCurrency);
      this.setState({
        saleCurrency,
        currentRate,
        perchaseSum,
      });
    }

    _handleDateChange(newDate) {
      const {onDateChange} = this.props;
      console.log(newDate);
      onDateChange(newDate);
    }

    _handleFormSubmit(evt) {
      evt.preventDefault();
      const {date, onSubmit} = this.props;
      const {saleSum, saleCurrency, perchaseSum, perchaseCurrency} = this.state;
      const id = generateId();
      const operation = {
        id,
        date: formatDate(date),
        perchaseSum: parseFloat(perchaseSum),
        perchaseCurrency,
        saleSum: parseFloat(saleSum),
        saleCurrency,
      };
      onSubmit(operation);
    }

    render() {
      const {saleSum, saleCurrency, perchaseSum, perchaseCurrency} = this.state;
      return (
        <Component
          {...this.props}
          perchaseCurrency={perchaseCurrency}
          perchaseSum={perchaseSum}
          onPerchaseCurrencyChange={this._handlePerchaseCurrencyChange}
          onPerchaseSumChange={this._handlePerchaseSumChange}
          onDateChange={this._handleDateChange}
          onSaleCurrencyChange={this._handleSaleCurrencyChange}
          onSaleSumChange={this._handleSaleSumChange}
          onFormSubmit={this._handleFormSubmit}
          saleCurrency={saleCurrency}
          saleSum={saleSum}
        />
      );
    }
  }

  WithCurrentOperation.propTypes = {
    perchaseCurrency: PropTypes.string.isRequired,
    rate: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    saleSum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    saleCurrency: PropTypes.string.isRequired,
  }

  return WithCurrentOperation;
}

export default withCurrentOperation;
