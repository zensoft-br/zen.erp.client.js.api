import { Account } from "./accounting/Account.js";
import { AccountComplement } from "./accounting/AccountComplement.js";
import { Company } from "../catalog/company/Company.js";
import { Person } from "../catalog/person/Person.js";
import { Wallet } from "./billing/Wallet.js";

export class BillingTitle {
  id!: number;
  status!: string;
  source!: string;
  company!: Company;
  person!: Person;
  payer!: Person;
  type!: string;
  code!: string;
  description!: string;
  barcode!: string;
  installment!: number;
  date!: Date;
  issueDate!: Date;
  dueDate!: Date;
  value!: number;
  valueSettlement!: number;
  valueDiscount!: number;
  valueRenegotiation!: number;
  valueAddition!: number;
  balance!: number;
  account!: Account;
  accountComplement!: AccountComplement;
  accountCounterpart!: Account;
  accountComplementCounterpart!: AccountComplement;
  wallet!: Wallet;
  tags!: string;
  properties!: any;
}
