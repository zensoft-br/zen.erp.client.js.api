import { Person } from "./Person.js";

export class PersonDocument {
  id!: number;
  person!: Person;
  type!: string;
  number!: string;
  tags!: string;
  properties!: Object;
}
