import { Account } from "./accounting/Account.js";
import { AccountComplement } from "./accounting/AccountComplement.js";
import { BillingTitle } from "./BillingTitle.js";
import { Settlement } from "./Settlement.js";

export class ReceivableSettlementBillingTitle {
  id!: number;
  settlement!: Settlement;
  billingTitle!: BillingTitle;
  type!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  value!: number;
}
