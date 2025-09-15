import { TradeContract } from "./TradeContract.js";
import { TradeExchangeContract } from "./TradeExchangeContract.js";

export class TradeContractPayment {
  id!: number;
  status!: string;
  exchangeContract!: TradeExchangeContract;
  contract!: TradeContract;
  date!: Date;
  value!: number;
  exchangeRate!: number;
  tags!: string;
  properties!: any;
}
