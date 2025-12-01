import { Company } from "../catalog/company/Company.js";
import { Invoice } from "../fiscal/Invoice.js";
import { Shipment } from "./Shipment.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class Clearance {
  id!: number;
  type!: string;
  status!: string;
  workflow!: Workflow;
  workpiece!: Workpiece;
  shipment!: Shipment;
  company!: Company;
  code!: string;
  date!: Date;
  invoice!: Invoice;
  tags!: string;
  properties!: any;
}
