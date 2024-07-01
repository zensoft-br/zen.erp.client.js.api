import { Person } from "../../catalog/person/Person.js";
import { Quote } from "./Quote.js";

export class Proposal {
  id!: number;
  status!: string;
  quote!: Quote;
  person!: Person;
  date!: Date;
  totalValue!: number;
  tags!: string;
  properties!: any;
}
