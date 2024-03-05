import { Person } from "../catalog/person/Person.js";
import { ResultCenter } from "./ResultCenter.js";

export class AccountComplement {
  id!: number;
  resultCenter!: ResultCenter;
  person!: Person;
}
