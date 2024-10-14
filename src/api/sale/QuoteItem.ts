import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quote } from "./Quote.js";

export class QuoteItem {
  id!: number;
  status!: string;
  quote!: Quote;
  productPacking!: ProductPacking;
  quantity!: number;
  tags!: string;
  properties!: any;
}
