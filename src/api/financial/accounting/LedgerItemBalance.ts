import { Account } from "./Account.js";
import { AccountComplement } from "./AccountComplement.js";
import { Company } from "../../catalog/company/Company.js";
import { FiscalYear } from "../../fiscal/FiscalYear.js";

export class LedgerItemBalance {
  company!: Company;
  fiscalYear!: FiscalYear;
  account!: Account;
  accountComplement!: AccountComplement;
  value!: number;
}
