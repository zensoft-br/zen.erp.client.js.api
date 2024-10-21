import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { ProductionStep } from "./ProductionStep.js";

export class ProductionStepConsumption {
  id!: number;
  productionStep!: ProductionStep;
  productPacking!: ProductPacking;
  quantity!: number;
  servedQuantity!: number;
  tags!: string;
  properties!: any;
}
