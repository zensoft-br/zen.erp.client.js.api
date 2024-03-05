import { Company } from "../catalog/company/Company.js";
import { OutgoingRequest } from "./OutgoingRequest.js";
import { Person } from "../catalog/person/Person.js";
import { PickingOrder } from "./PickingOrder.js";
import { Reservation } from "./Reservation.js";
import { Shipment } from "../shipping/Shipment.js";

export class OutgoingList {
  id!: number;
  company!: Company;
  status!: string;
  date!: Date;
  outgoingRequest!: OutgoingRequest;
  person!: Person;
  pickingOrder!: PickingOrder;
  reservation!: Reservation;
  shipment!: Shipment;
  tags!: string;
  properties!: Object;
}
