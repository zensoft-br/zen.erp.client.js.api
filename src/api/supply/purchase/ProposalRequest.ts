import { Person } from "../../catalog/person/Person.js";
import { ProposalItem } from "./ProposalItem.js";
import { Quote } from "./Quote.js";

export class ProposalRequest {
  items!: ProposalItem[];
  id!: number;
  status!: string;
  quote!: Quote;
  person!: Person;
  date!: Date;
  totalValue!: number;
  tags!: string;
  properties!: any;
}
