import { Company } from "../catalog/company/Company.js";
import { JournalEntry } from "../financial/accounting/JournalEntry.js";

export class Inventory {
  id!: number;
  company!: Company;
  status!: string;
  date!: Date;
  description!: string;
  pointInTime!: Date;
  journalEntry!: JournalEntry;
  tags!: string;
  properties!: any;
}
