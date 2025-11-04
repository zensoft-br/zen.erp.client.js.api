import { Company } from "../catalog/company/Company.js";
import { InventoryProfile } from "./InventoryProfile.js";
import { JournalEntry } from "../financial/accounting/JournalEntry.js";

export class Inventory {
  id!: number;
  company!: Company;
  status!: string;
  inventoryProfile!: InventoryProfile;
  date!: Date;
  description!: string;
  pointInTime!: Date;
  journalEntry!: JournalEntry;
  tags!: string;
  properties!: any;
}
