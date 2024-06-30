import { ArgsOpSettleMethodSettlement } from "./ArgsOpSettleMethodSettlement.js";
import { BillingTitle } from "./BillingTitle.js";

export class ArgsOpSettleMethod {
  type!: string;
  settlement!: ArgsOpSettleMethodSettlement;
  billingTitle!: BillingTitle;
  billingTitleId!: number;
}
