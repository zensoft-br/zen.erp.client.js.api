import { Account } from "./Account.js";
import { AccountComplement } from "./AccountComplement.js";
import { Company } from "../../catalog/company/Company.js";
import { FiscalYear } from "../../fiscal/FiscalYear.js";
import { JournalEntry } from "./JournalEntry.js";

export class LedgerItem {
  id!: number;
  journalEntry!: JournalEntry;
  company!: Company;
  fiscalYear!: FiscalYear;
  date!: Date;
  account!: Account;
  accountComplement!: AccountComplement;
  accountCounterpart!: Account;
  value!: number;
  sign!: string;
  description!: string;
  previousBalance!: number;
  balance!: number;
}
