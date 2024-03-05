import { ProductionOrder } from "./ProductionOrder.js";
import { StockData } from "../material/StockData.js";

export class ProductionOrderProduction {
  id!: number;
  productionOrder!: ProductionOrder;
  stockData!: StockData;
  tags!: string;
  properties!: Object;
}
