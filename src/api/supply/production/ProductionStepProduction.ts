import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { ProductionStep } from "./ProductionStep.js";

export class ProductionStepProduction {
  id!: number;
  productionStep!: ProductionStep;
  productPacking!: ProductPacking;
  quantity!: number;
  weight!: number;
  servedQuantity!: number;
  tags!: string;
  properties!: any;
}
