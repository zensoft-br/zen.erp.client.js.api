import { Account } from "../financial/accounting/Account.js";
import { AccountComplement } from "../financial/accounting/AccountComplement.js";
import { Invoice } from "./Invoice.js";

export class IncomingInvoicePayment {
  id!: number;
  invoice!: Invoice;
  type!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  dueDate!: Date;
  value!: number;
  tags!: string;
  properties!: any;
}
