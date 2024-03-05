import { Company } from "../catalog/company/Company.js";

export class JournalEntry {
  id!: number;
  company!: Company;
  date!: Date;
  source!: string;
  description!: string;
  tags!: string;
  credits!: number;
  debits!: number;
  value!: number;
  status!: string;
}
