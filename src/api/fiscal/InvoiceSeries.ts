import { Company } from "../catalog/company/Company.js";

export class InvoiceSeries {
  id!: number;
  company!: Company;
  code!: string;
  description!: string;
  tags!: string;
  properties!: Object;
  lastNumber!: number;
}
