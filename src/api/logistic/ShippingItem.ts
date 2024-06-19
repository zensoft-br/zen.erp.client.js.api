import { IncomingShipping } from "./IncomingShipping.js";
import { PurchaseItem } from "../supply/purchase/PurchaseItem.js";

export class ShippingItem {
  id!: number;
  shipping!: IncomingShipping;
  purchaseItem!: PurchaseItem;
  quantity!: number;
}
