import { Currency } from "../financial/Currency.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { QuoteItem } from "./QuoteItem.js";

export class QuoteItemProposal {
  id!: number;
  status!: string;
  quoteItem!: QuoteItem;
  productPacking!: ProductPacking;
  quantity!: number;
  currency!: Currency;
  unitValue!: number;
  totalValue!: number;
  availabilityDate!: Date;
  tags!: string;
  properties!: any;
}
