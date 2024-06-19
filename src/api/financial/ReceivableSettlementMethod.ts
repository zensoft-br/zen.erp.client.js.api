import { Account } from "./accounting/Account.js";
import { AccountComplement } from "./accounting/AccountComplement.js";
import { BillingTitle } from "./BillingTitle.js";
import { Settlement } from "./Settlement.js";

export class ReceivableSettlementMethod {
  id!: number;
  settlement!: Settlement;
  type!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  value!: number;
  billingTitle!: BillingTitle;
}
