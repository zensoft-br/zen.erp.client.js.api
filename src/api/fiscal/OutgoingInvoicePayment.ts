import { Account } from "../financial/accounting/Account.js";
import { AccountComplement } from "../financial/accounting/AccountComplement.js";
import { Invoice } from "./Invoice.js";

export class OutgoingInvoicePayment {
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
