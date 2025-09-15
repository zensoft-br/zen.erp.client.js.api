import { Person } from "../catalog/person/Person.js";

export class TradeShipment {
  id!: number;
  status!: string;
  person!: Person;
  code!: string;
  description!: string;
  date!: Date;
  tags!: string;
  properties!: any;
}
