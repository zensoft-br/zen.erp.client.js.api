import { OutgoingRequestItem } from "./OutgoingRequestItem.js";
import { PickingOrder } from "./PickingOrder.js";

export class PickingOrderItem {
  id!: number;
  pickingOrder!: PickingOrder;
  outgoingRequestItem!: OutgoingRequestItem;
  quantity!: number;
}
