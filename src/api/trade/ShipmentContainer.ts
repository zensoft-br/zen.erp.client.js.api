import { Person } from "../catalog/person/Person.js";
import { Shipment } from "./Shipment.js";

export class ShipmentContainer {
  id!: number;
  shipment!: Shipment;
  number!: string;
  sealNumber!: string;
  dischargeDate!: Date;
  availabilityDate!: Date;
  pickupDueDate!: Date;
  pickupDate!: Date;
  returnDueDate!: Date;
  returnDate!: Date;
  personShipping!: Person;
  tags!: string;
  properties!: any;
}
