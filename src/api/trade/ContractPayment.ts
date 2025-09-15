import { Contract } from "./Contract.js";
import { ExchangeContract } from "./ExchangeContract.js";

export class ContractPayment {
  id!: number;
  status!: string;
  exchangeContract!: ExchangeContract;
  contract!: Contract;
  date!: Date;
  exchangeContractValue!: number;
  contractValue!: number;
  localValue!: number;
  tags!: string;
  properties!: any;
}
