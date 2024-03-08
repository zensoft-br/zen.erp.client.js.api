import { Company } from "../catalog/company/Company.js";

export class ArgsFinancialEntryCreate {
  company!: Company;
  flow!: string;
  date!: Date;
  description!: string;
  lancamentos!: any;
  tags!: string;
}
