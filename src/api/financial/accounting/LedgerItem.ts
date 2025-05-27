import { Account } from "./Account.js";
import { Company } from "../../catalog/company/Company.js";
import { FiscalYear } from "../../fiscal/FiscalYear.js";
import { JournalEntry } from "./JournalEntry.js";
import { Person } from "../../catalog/person/Person.js";
import { ResultCenter } from "./ResultCenter.js";

export class LedgerItem {
  id!: number;
  journalEntry!: JournalEntry;
  company!: Company;
  fiscalYear!: FiscalYear;
  date!: Date;
  account!: Account;
  resultCenter!: ResultCenter;
  person!: Person;
  accountCounterpart!: Account;
  value!: number;
  sign!: string;
  description!: string;
  previousBalance!: number;
  balance!: number;
}
