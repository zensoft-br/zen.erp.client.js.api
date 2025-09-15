import { ContractItem } from "./ContractItem.js";
import { OutgoingInvoice } from "../../fiscal/OutgoingInvoice.js";

export class ContractBilling {
  id!: number;
  status!: string;
  contractItem!: ContractItem;
  date!: Date;
  value!: number;
  invoice!: OutgoingInvoice;
  tags!: string;
  properties!: any;
}
