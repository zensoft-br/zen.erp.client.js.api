import { Currency } from "../financial/Currency.js";
import { FiscalProfileProduct } from "../fiscal/FiscalProfileProduct.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quote } from "./Quote.js";

export class QuoteItem {
  id!: number;
  status!: string;
  quote!: Quote;
  productPacking!: ProductPacking;
  fiscalProfileProduct!: FiscalProfileProduct;
  quantity!: number;
  currency!: Currency;
  unitValue!: number;
  totalValue!: number;
  approvedQuantity!: number;
  tags!: string;
  properties!: Object;
}
