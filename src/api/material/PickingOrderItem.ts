import { PickingOrder } from "./PickingOrder.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { StockCluster } from "./StockCluster.js";

export class PickingOrderItem {
  id!: number;
  pickingOrder!: PickingOrder;
  stockCluster!: StockCluster;
  productPacking!: ProductPacking;
  quantity!: number;
}
