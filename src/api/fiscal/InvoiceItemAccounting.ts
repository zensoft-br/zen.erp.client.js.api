import { Account } from "../financial/accounting/Account.js";
import { AccountComplement } from "../financial/accounting/AccountComplement.js";
import { InvoiceItem } from "./InvoiceItem.js";

export class InvoiceItemAccounting {
  id!: number;
  invoiceItem!: InvoiceItem;
  type!: string;
  sign!: string;
  account!: Account;
  accountComplement!: AccountComplement;
  value!: number;
  tags!: string;
  properties!: any;
}
