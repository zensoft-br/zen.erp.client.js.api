import { Account } from "./Account.js";
import { AccountComplement } from "./AccountComplement.js";
import { JournalEntry } from "./JournalEntry.js";

export class JournalItem {
  id!: number;
  journalEntry!: JournalEntry;
  account!: Account;
  accountComplement!: AccountComplement;
  value!: number;
  sign!: string;
  description!: string;
}
