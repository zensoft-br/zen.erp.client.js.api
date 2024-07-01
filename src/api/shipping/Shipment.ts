import { Company } from "../catalog/company/Company.js";
import { Person } from "../catalog/person/Person.js";

export class Shipment {
  id!: number;
  company!: Company;
  status!: string;
  person!: Person;
  date!: Date;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  tags!: string;
  properties!: any;
}
