import { AssetTag } from "./accounting/AssetTag.js";
import { BillingTitle } from "./BillingTitle.js";
import { Settlement } from "./Settlement.js";

export class SettlementMethod {
  id!: number;
  settlement!: Settlement;
  type!: string;
  value!: number;
  billingTitle!: BillingTitle;
  assetTag!: AssetTag;
}
