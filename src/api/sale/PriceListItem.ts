import { Currency } from "../financial/Currency.js";
import { PriceList } from "../commercial/PriceList.js";
import { Product } from "../catalog/product/Product.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class PriceListItem {
  id!: number;
  priceList!: PriceList;
  product!: Product;
  productPacking!: ProductPacking;
  currency!: Currency;
  unitValue!: number;
  variationRateLow!: number;
  variationRateHigh!: number;
  tags!: string;
  properties!: any;
}
