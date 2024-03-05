import { Account } from "../accounting/Account.js";
import { AccountComplement } from "../accounting/AccountComplement.js";
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
  properties!: Object;
}
