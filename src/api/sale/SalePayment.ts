import { Account } from "../accounting/Account.js";
import { AccountComplement } from "../accounting/AccountComplement.js";
import { Sale } from "./Sale.js";

export class SalePayment {
  id!: number;
  sale!: Sale;
  type!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  term!: number;
  value!: number;
  tags!: string;
  properties!: Object;
}
