import { AssetTag } from "./accounting/AssetTag.js";
import { BillingTitle } from "./BillingTitle.js";
import { Settlement } from "./Settlement.js";

export class ReceivableSettlementBillingTitle {
  id!: number;
  settlement!: Settlement;
  billingTitle!: BillingTitle;
  type!: string;
  value!: number;
  assetTag!: AssetTag;
}
