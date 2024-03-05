import { Currency } from "./Currency.js";

export class CurrencyExchangeRate {
  id!: number;
  source!: Currency;
  destination!: Currency;
  date!: Date;
  exchangeRate!: number;
}
