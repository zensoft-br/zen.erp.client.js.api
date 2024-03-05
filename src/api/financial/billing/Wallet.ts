import { Company } from "../../catalog/company/Company.js";

export class Wallet {
  id!: number;
  company!: Company;
  code!: string;
  description!: string;
  type!: string;
  batchLastSequence!: number;
  bankNumberLastSequence!: number;
  interestRateMonth!: number;
  lateFee!: number;
  tags!: string;
  properties!: Object;
}
