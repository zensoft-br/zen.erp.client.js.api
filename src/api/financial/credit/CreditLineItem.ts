import { CreditLine } from "./CreditLine.js";
import { Person } from "../../catalog/person/Person.js";
import { PersonGroup } from "../../catalog/person/PersonGroup.js";

export class CreditLineItem {
  id!: number;
  creditLine!: CreditLine;
  personGroup!: PersonGroup;
  person!: Person;
  value!: number;
  tags!: string;
  properties!: any;
}
