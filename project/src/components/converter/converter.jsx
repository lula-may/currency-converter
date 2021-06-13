import React, {PureComponent} from "react";
import FieldsGroup from "../fields-group/fields-group";
import {getCurrentRate, convertBuySum, convertSaleSum} from "../../utils";

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
    const {buySum, buyCurrency, saleSum, saleCurrency} = this.state;
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
              <p className="convert-form__field field">
                <label className="visually-hidden" htmlFor="date">Дата для расчета курса валют</label>
                <input className="field__control field__control--input field__control--date" type="text" id="date" name="date" defaultValue="1.12.2020" />
              </p>
              <button className="convert-form__button button" type="submit">Сохранить результат</button>
            </div>
          </form>
        </section>
    );
  }
}
