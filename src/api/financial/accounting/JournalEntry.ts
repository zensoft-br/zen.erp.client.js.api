import { Company } from "../../catalog/company/Company.js";

export class JournalEntry {
  id!: number;
  company!: Company;
  status!: string;
  date!: Date;
  source!: string;
  description!: string;
  tags!: string;
  properties!: any;
  credits!: number;
  debits!: number;
  value!: number;
}
