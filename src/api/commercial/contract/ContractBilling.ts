import { ContractItem } from "./ContractItem.js";

export class ContractBilling {
  id!: number;
  status!: string;
  contractItem!: ContractItem;
  date!: Date;
  value!: number;
  tags!: string;
  properties!: any;
}
