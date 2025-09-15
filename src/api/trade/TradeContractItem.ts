import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { TradeContract } from "./TradeContract.js";

export class TradeContractItem {
  id!: number;
  contract!: TradeContract;
  productPacking!: ProductPacking;
  quantity!: number;
  unitValue!: number;
  totalValue!: number;
  shippedQuantity!: number;
  clearedQuantity!: number;
  tags!: string;
  properties!: any;
}
