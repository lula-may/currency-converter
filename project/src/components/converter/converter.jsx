import React, {PureComponent} from "react";
import FieldsGroup from "../fields-group/fields-group";
import {getCurrentRate, convertBuySum, convertSaleSum} from "../../utils";
import FieldDate from "../field-date/field-date";
// import withDatepicker from "../../hocs/with-datepicker/with-datepicker";

// const FieldDateWrapped = withDatepicker(FieldDate);

export default class Converter extends PureComponent {
  constructor(props) {
    super(props);
    const {saleSum, saleCurrency, buySum, buyCurrency, date, rate} = props;
    this.state = {
      saleSum,
      saleCurrency,
      buySum,
      buyCurrency,
      date,
      currentRate: getCurrentRate(rate, saleCurrency, buyCurrency),
    }

    this._handleBuyCurrencyChange = this._handleBuyCurrencyChange.bind(this);
    this._handleBuySumChange = this._handleBuySumChange.bind(this);
    this._handleSaleCurrencyChange = this._handleSaleCurrencyChange.bind(this);
    this._handleSaleSumChange = this._handleSaleSumChange.bind(this);
  }

  _handleBuySumChange(evt) {
    const {currentRate} = this.state;
    const buySum = Number(evt.target.value) || '';
    const saleSum = convertBuySum(buySum, currentRate);
    this.setState({
      buySum,
      saleSum
    });
  }

  _handleBuyCurrencyChange(evt) {
    const {saleCurrency, buySum} = this.state;
    const {rate} = this.props;
    const buyCurrency = evt.target.value;
    const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);
    const saleSum = convertBuySum(buySum, currentRate);
    this.setState({
      buyCurrency,
      currentRate,
      saleSum,
    });
  }

  _handleSaleSumChange(evt) {
    const {currentRate} = this.state;
    const saleSum = Number(evt.target.value) || '';
    const buySum = convertSaleSum(saleSum, currentRate);
    this.setState({
      buySum,
      saleSum,
    });
  }

  _handleSaleCurrencyChange(evt) {
    const {buyCurrency, saleSum} = this.state;
    const {rate} = this.props;
    const saleCurrency = evt.target.value;
    const currentRate = getCurrentRate(rate, saleCurrency, buyCurrency);
    const buySum = convertSaleSum(saleSum, currentRate);
    this.setState({
      saleCurrency,
      currentRate,
      buySum,
    });
  }

  render() {
    const {buySum, buyCurrency,date, saleSum, saleCurrency} = this.state;
    return (
      <section className="converter">
          <h1 className="converter__title">Конвертер валют</h1>
          <form action="#" className="convert-form" method="GET">
              <FieldsGroup
                buyCurrency={buyCurrency}
                buySum={buySum}
                onBuyCurrencyChange={this._handleBuyCurrencyChange}
                onBuySumChange={this._handleBuySumChange}
                onSaleCurrencyChange={this._handleSaleCurrencyChange}
                onSaleSumChange={this._handleSaleSumChange}
                saleCurrency={saleCurrency}
                saleSum={saleSum}
              />
            <div className="convert-form__wrapper">
              <FieldDate
                date={date}
                onDateChange={(newDate) => console.log("newDate: ", newDate)}
              />
              <button className="convert-form__button button" type="submit">Сохранить результат</button>
            </div>
          </form>
        </section>
    );
  }
}
