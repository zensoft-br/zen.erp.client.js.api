import { Company } from "../../catalog/company/Company.js";
import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { ProductionProfile } from "./ProductionProfile.js";
import { Workflow } from "../../system/workflow/Workflow.js";
import { Workpiece } from "../../system/workflow/Workpiece.js";

export class ProductionOrder {
  id!: number;
  status!: string;
  productionProfile!: ProductionProfile;
  company!: Company;
  workflow!: Workflow;
  workpiece!: Workpiece;
  date!: Date;
  availabilityDate!: Date;
  productPacking!: ProductPacking;
  quantity!: number;
  servedQuantity!: number;
  tags!: string;
  properties!: any;
}
