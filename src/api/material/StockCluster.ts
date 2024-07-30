import { PriceListCost } from "../supply/purchase/PriceListCost.js";
import { PriceListRetail } from "../sale/PriceListRetail.js";

export class StockCluster {
  id!: number;
  code!: string;
  description!: string;
  assetValuationMethod!: string;
  priceListCost!: PriceListCost;
  priceListRetail!: PriceListRetail;
  tags!: string;
  properties!: any;
}
