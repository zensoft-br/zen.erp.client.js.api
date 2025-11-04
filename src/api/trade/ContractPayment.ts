import { Contract } from "./Contract.js";
import { ExchangeContract } from "./ExchangeContract.js";

export class ContractPayment {
  id!: number;
  status!: string;
  exchangeContract!: ExchangeContract;
  contract!: Contract;
  date!: Date;
  value!: number;
  tags!: string;
  properties!: any;
}
