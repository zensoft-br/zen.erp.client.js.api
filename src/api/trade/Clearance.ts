import { Company } from "../catalog/company/Company.js";
import { Invoice } from "../fiscal/Invoice.js";
import { Shipment } from "./Shipment.js";

export class Clearance {
  id!: number;
  status!: string;
  shipment!: Shipment;
  company!: Company;
  code!: string;
  date!: Date;
  invoice!: Invoice;
  tags!: string;
  properties!: any;
}
