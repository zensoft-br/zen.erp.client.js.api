import { Account } from "./Account.js";
import { JournalEntry } from "./JournalEntry.js";
import { Person } from "../../catalog/person/Person.js";
import { ResultCenter } from "./ResultCenter.js";

export class JournalItem {
  id!: number;
  journalEntry!: JournalEntry;
  account!: Account;
  resultCenter!: ResultCenter;
  person!: Person;
  value!: number;
  sign!: string;
  description!: string;
}
