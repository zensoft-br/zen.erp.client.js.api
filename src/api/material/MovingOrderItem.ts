import { Address } from "./Address.js";
import { MovingOrder } from "./MovingOrder.js";
import { StockData } from "./StockData.js";

export class MovingOrderItem {
  id!: number;
  movingOrder!: MovingOrder;
  status!: string;
  address!: Address;
  stock!: StockData;
  quantity!: number;
  quantityLoaded!: number;
  quantityUnloaded!: number;
  tags!: string;
  properties!: Object;
}
