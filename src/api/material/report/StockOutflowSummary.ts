import { ProductPacking } from "../../catalog/product/ProductPacking.js";

export class StockOutflowSummary {
  productPacking!: ProductPacking;
  quantity!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
}
