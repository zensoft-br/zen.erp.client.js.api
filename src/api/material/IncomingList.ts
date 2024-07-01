import { Company } from "../catalog/company/Company.js";
import { Person } from "../catalog/person/Person.js";

export class IncomingList {
  id!: number;
  company!: Company;
  status!: string;
  person!: Person;
  date!: Date;
  tags!: string;
  properties!: any;
}
