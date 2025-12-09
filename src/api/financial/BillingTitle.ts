import { AssetTag } from "./accounting/AssetTag.js";
import { Company } from "../catalog/company/Company.js";
import { Person } from "../catalog/person/Person.js";
import { Wallet } from "./billing/Wallet.js";

export class BillingTitle {
  id!: number;
  flow!: string;
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
  settlementDate!: Date;
  value!: number;
  valueSettlement!: number;
  valueDiscount!: number;
  valueRenegotiation!: number;
  valueAddition!: number;
  balance!: number;
  wallet!: Wallet;
  assetTag!: AssetTag;
  assetTagCounterpart!: AssetTag;
  tags!: string;
  properties!: any;
}
