import { Company } from "../catalog/company/Company.js";
import { IncomingList } from "../material/IncomingList.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { ProductionSchema } from "./ProductionSchema.js";
import { Reservation } from "../material/Reservation.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class ProductionOrder {
  id!: number;
  status!: string;
  productionSchema!: ProductionSchema;
  company!: Company;
  workflow!: Workflow;
  workpiece!: Workpiece;
  datetime!: Date;
  availabilityDatetime!: Date;
  productPacking!: ProductPacking;
  quantity!: number;
  servedQuantity!: number;
  reservation!: Reservation;
  incomingList!: IncomingList;
  tags!: string;
  properties!: Object;
}
