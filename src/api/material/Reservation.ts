import { Company } from "../catalog/company/Company.js";
import { Person } from "../catalog/person/Person.js";

export class Reservation {
  id!: number;
  company!: Company;
  status!: string;
  person!: Person;
  code!: string;
  date!: Date;
  tags!: string;
  properties!: any;
}
