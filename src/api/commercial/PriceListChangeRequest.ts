import { Currency } from "../financial/Currency.js";
import { PriceList } from "./PriceList.js";
import { Product } from "../catalog/product/Product.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class PriceListChangeRequest {
  id!: number;
  status!: string;
  date!: Date;
  priceList!: PriceList;
  product!: Product;
  productPacking!: ProductPacking;
  currency!: Currency;
  unitValue!: number;
  tags!: string;
  properties!: Object;
}
