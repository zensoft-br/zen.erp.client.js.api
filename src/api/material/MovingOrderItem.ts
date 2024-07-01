import { Address } from "./Address.js";
import { MovingOrder } from "./MovingOrder.js";
import { StockData } from "./StockData.js";
import { User } from "../system/security/User.js";

export class MovingOrderItem {
  id!: number;
  movingOrder!: MovingOrder;
  status!: string;
  address!: Address;
  stock!: StockData;
  quantity!: number;
  quantityLoaded!: number;
  quantityUnloaded!: number;
  user!: User;
  tags!: string;
  properties!: any;
}
