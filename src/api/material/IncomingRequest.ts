import { Company } from "../catalog/company/Company.js";
import { Person } from "../catalog/person/Person.js";
import { Warehouse } from "./Warehouse.js";

export class IncomingRequest {
  id!: number;
  company!: Company;
  warehouse!: Warehouse;
  status!: string;
  person!: Person;
  date!: Date;
  code!: string;
  description!: string;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  tags!: string;
  properties!: any;
}
