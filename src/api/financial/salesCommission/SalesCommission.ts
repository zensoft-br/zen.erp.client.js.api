import { Account } from "../accounting/Account.js";
import { BillingTitle } from "../BillingTitle.js";
import { Company } from "../../catalog/company/Company.js";
import { Invoice } from "../../fiscal/Invoice.js";
import { InvoiceItem } from "../../fiscal/InvoiceItem.js";
import { JournalEntry } from "../accounting/JournalEntry.js";
import { Person } from "../../catalog/person/Person.js";

export class SalesCommission {
  id!: number;
  company!: Company;
  status!: string;
  source!: string;
  type!: string;
  person!: Person;
  date!: Date;
  description!: string;
  baseValue!: number;
  percentage!: number;
  value!: number;
  invoice!: Invoice;
  invoiceItem!: InvoiceItem;
  billingTitle!: BillingTitle;
  accountDR!: Account;
  accountCR!: Account;
  journalEntry!: JournalEntry;
  tags!: string;
  properties!: any;
}
