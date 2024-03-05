import { Person } from "./Person.js";

export class PersonContact {
  id!: number;
  person!: Person;
  type!: string;
  description!: string;
  tags!: string;
  properties!: Object;
}
