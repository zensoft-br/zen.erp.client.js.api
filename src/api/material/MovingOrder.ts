import { Company } from "../catalog/company/Company.js";

export class MovingOrder {
  id!: number;
  company!: Company;
  status!: string;
  date!: Date;
  tags!: string;
  properties!: any;
}
