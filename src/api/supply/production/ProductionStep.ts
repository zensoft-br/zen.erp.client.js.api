import { ProductionOrder } from "./ProductionOrder.js";

export class ProductionStep {
  id!: number;
  productionOrder!: ProductionOrder;
  tags!: string;
  properties!: any;
}
