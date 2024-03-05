import { Account } from "../accounting/Account.js";
import { AccountComplement } from "../accounting/AccountComplement.js";
import { Invoice } from "./Invoice.js";

export class InvoicePayment {
  id!: number;
  invoice!: Invoice;
  type!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  dueDate!: Date;
  value!: number;
  tags!: string;
  properties!: Object;
}
