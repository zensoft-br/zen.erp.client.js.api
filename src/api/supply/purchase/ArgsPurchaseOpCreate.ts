import { Purchase } from "./Purchase.js";
import { PurchaseItem } from "./PurchaseItem.js";
import { PurchasePayment } from "./PurchasePayment.js";

export class ArgsPurchaseOpCreate {
  purchase!: Purchase;
  items!: PurchaseItem[];
  payments!: PurchasePayment[];
}
