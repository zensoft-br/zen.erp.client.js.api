import { BillingTitle } from "../BillingTitle.js";
import { Wallet } from "./Wallet.js";

export class Instruction {
  id!: number;
  billingTitle!: BillingTitle;
  wallet!: Wallet;
  date!: Date;
  tags!: string;
  properties!: any;
}
