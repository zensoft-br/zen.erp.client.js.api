import { Account } from "../accounting/Account.js";
import { AccountComplement } from "../accounting/AccountComplement.js";
import { Purchase } from "./Purchase.js";

export class PurchasePayment {
  id!: number;
  purchase!: Purchase;
  type!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  term!: number;
  value!: number;
  tags!: string;
  properties!: Object;
}
