import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { ProductionOrder } from "./ProductionOrder.js";
import { Workflow } from "../../system/workflow/Workflow.js";
import { Workpiece } from "../../system/workflow/Workpiece.js";

export class ProductionStep {
  id!: number;
  status!: string;
  productionOrder!: ProductionOrder;
  workflow!: Workflow;
  workpiece!: Workpiece;
  productPacking!: ProductPacking;
  quantity!: number;
  servedQuantity!: number;
  productionStepParent!: ProductionStep;
  tags!: string;
  properties!: any;
}
