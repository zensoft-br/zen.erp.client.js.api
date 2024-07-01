import { Person } from "./Person.js";

export class PersonComment {
  id!: number;
  person!: Person;
  comments!: string;
  tags!: string;
  properties!: any;
}
