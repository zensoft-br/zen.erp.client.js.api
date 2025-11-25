import { Account } from "../financial/accounting/Account.js";
import { ExchangeContract } from "./ExchangeContract.js";

export class ExchangeContractPayment {
  id!: number;
  status!: string;
  exchangeContract!: ExchangeContract;
  date!: Date;
  account!: Account;
  value!: number;
  tags!: string;
  properties!: any;
}
