import { BatchRequest } from "./BatchRequest.js";
import { BillingTitle } from "../BillingTitle.js";
import { Wallet } from "./Wallet.js";

export class InstructionRequest {
  status!: string;
  type!: string;
  batch!: BatchRequest;
  id!: number;
  billingTitle!: BillingTitle;
  wallet!: Wallet;
  date!: Date;
  tags!: string;
  properties!: Object;
}
