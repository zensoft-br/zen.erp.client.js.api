import { Contract } from "./Contract.js";

export class ContractItem {
  id!: number;
  contract!: Contract;
  description!: string;
  quantity!: number;
  unitValue!: number;
  totalValue!: number;
  tags!: string;
  properties!: Object;
}
