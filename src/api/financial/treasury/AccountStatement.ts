import { Account } from "../../accounting/Account.js";
import { Company } from "../../catalog/company/Company.js";

export class AccountStatement {
  id!: number;
  status!: string;
  company!: Company;
  account!: Account;
  fitid!: string;
  date!: Date;
  description!: string;
  value!: number;
  tags!: string;
  properties!: Object;
}
