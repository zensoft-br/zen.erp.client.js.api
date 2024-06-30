import { Sale } from "./Sale.js";
import { SaleItem } from "./SaleItem.js";
import { SalePayment } from "./SalePayment.js";

export class ArgsSaleOpCreate {
  sale!: Sale;
  items!: SaleItem[];
  payments!: SalePayment[];
}
