import { Company } from "../catalog/company/Company.js";
import { OutgoingRequestUnique } from "./OutgoingRequestUnique.js";
import { Person } from "../catalog/person/Person.js";
import { Warehouse } from "./Warehouse.js";

export class OutgoingRequest {
  id!: number;
  company!: Company;
  warehouse!: Warehouse;
  status!: string;
  source!: string;
  person!: Person;
  date!: Date;
  description!: string;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  unique!: OutgoingRequestUnique;
  tags!: string;
  properties!: any;
}
