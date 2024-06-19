import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { Quote } from "./Quote.js";
import { Unit } from "../../catalog/product/Unit.js";

export class QuoteItem {
  id!: number;
  quote!: Quote;
  productPacking!: ProductPacking;
  unit!: Unit;
  quantity!: number;
  internalQuantity!: number;
  approvedQuantity!: number;
  tags!: string;
  properties!: Object;
}
