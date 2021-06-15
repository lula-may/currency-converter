import {API_KEY, CURRENCIES} from "../const";
import {formatDate, isToday} from "../utils";

// const url = `http://api.currencylayer.com/historical?access_key=${API_KEY}&currencies=RUB,USD,EUR,GBP,CNY&date=2021-06-01`;

export default class Api {
  constructor() {
    this._baseUrl = `http://api.currencylayer.com`;
    this._apiKey = API_KEY;
    this._currencies = CURRENCIES.join(',');
  }

  _getAllRates(quotes) {
    const quote = Object.assign({}, quotes);
      CURRENCIES.forEach((y) => {
        CURRENCIES.forEach((x) => {
          quote[`${y}${x}`] = (quote[`USD${x}`] / quote[`USD${y}`]).toFixed(6);
        })
      });
    return quote;
  }

  _getResource(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Не удалось загрузить данные, статус ответа: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const rate = this._getAllRates(data.quotes);
        console.log(rate);
        return rate;
      });
  }

  getRates(date) {
    const url = (!date || isToday(date))
      ? `${this._baseUrl}/live?access_key=${this._apiKey}&currencies=${this._currencies}`
      : `${this._baseUrl}/historical?access_key=${this._apiKey}&currencies=${this._currencies}&date=${formatDate(date)}`;
      console.log(url);
    return this._getResource(url);
  }
}
