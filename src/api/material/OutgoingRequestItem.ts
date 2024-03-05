import { OutgoingRequest } from "./OutgoingRequest.js";
import { PickingOrder } from "./PickingOrder.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class OutgoingRequestItem {
  id!: number;
  status!: string;
  outgoingRequest!: OutgoingRequest;
  productPacking!: ProductPacking;
  quantity!: number;
  servedQuantity!: number;
  pickingOrder!: PickingOrder;
}
