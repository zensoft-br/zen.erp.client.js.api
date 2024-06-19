import { IncomingList } from "../../material/IncomingList.js";
import { JournalEntry } from "../../financial/accounting/JournalEntry.js";
import { ProductionStep } from "./ProductionStep.js";
import { Reservation } from "../../material/Reservation.js";

export class ProductionBatch {
  id!: number;
  status!: string;
  productionStep!: ProductionStep;
  date!: Date;
  reservation!: Reservation;
  incomingList!: IncomingList;
  journalEntry!: JournalEntry;
  tags!: string;
  properties!: Object;
}
