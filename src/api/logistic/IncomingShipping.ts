import { Company } from "../catalog/company/Company.js";

export class IncomingShipping {
  id!: number;
  company!: Company;
  date!: Date;
  tags!: string;
  status!: string;
  comments!: string;
}
