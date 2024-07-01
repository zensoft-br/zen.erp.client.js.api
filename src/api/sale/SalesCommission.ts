import { Person } from "../catalog/person/Person.js";

export class SalesCommission {
  id!: number;
  source!: string;
  person!: Person;
  type!: string;
  value!: number;
  tags!: string;
  properties!: any;
}
