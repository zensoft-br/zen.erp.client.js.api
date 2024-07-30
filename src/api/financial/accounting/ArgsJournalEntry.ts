export class ArgsJournalEntry {
  id!: number;
  companyId!: number;
  date!: Date;
  source!: string;
  value!: number;
  description!: string;
  tags!: string;
  properties!: any;
  items!: any[];
  publish!: boolean;
}
