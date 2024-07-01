import { Company } from "../catalog/company/Company.js";
import { JournalEntry } from "./accounting/JournalEntry.js";
import { Person } from "../catalog/person/Person.js";

export class ReceivableSettlement {
  id!: number;
  company!: Company;
  flow!: string;
  person!: Person;
  date!: Date;
  settlementDate!: Date;
  billingTitleCount!: number;
  entryCount!: number;
  valueSettlement!: number;
  valueDiscount!: number;
  valueRenegotiation!: number;
  valueAddition!: number;
  value!: number;
  journalEntry!: JournalEntry;
  tags!: string;
  properties!: any;
}
