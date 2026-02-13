import { CostProfile } from "./CostProfile.js";
import { Currency } from "../financial/Currency.js";
import { Person } from "../catalog/person/Person.js";
import { Shipment } from "./Shipment.js";

export class Cost {
  id!: number;
  status!: string;
  costProfile!: CostProfile;
  shipment!: Shipment;
  person!: Person;
  description!: string;
  date!: Date;
  dueDate!: Date;
  value!: number;
  currency!: Currency;
  exchangeRate!: number;
  tags!: string;
  properties!: any;
}
