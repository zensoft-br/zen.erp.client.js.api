import { Account } from "./Account.js";
import { Company } from "../../catalog/company/Company.js";
import { FiscalYear } from "../../fiscal/FiscalYear.js";
import { Person } from "../../catalog/person/Person.js";
import { ResultCenter } from "./ResultCenter.js";

export class LedgerItemBalance {
  company!: Company;
  fiscalYear!: FiscalYear;
  account!: Account;
  resultCenter!: ResultCenter;
  person!: Person;
  value!: number;
}
