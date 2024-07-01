import { BatchResponse } from "./BatchResponse.js";
import { BillingTitle } from "../BillingTitle.js";
import { Wallet } from "./Wallet.js";

export class InstructionResponse {
  status!: string;
  type!: string;
  batch!: BatchResponse;
  id!: number;
  billingTitle!: BillingTitle;
  wallet!: Wallet;
  date!: Date;
  tags!: string;
  properties!: any;
}
