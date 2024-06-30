import { PriceList } from "../sale/PriceList.js";
import { PriceList as PriceList1 } from "../supply/purchase/PriceList.js";

export class StockCluster {
  id!: number;
  code!: string;
  description!: string;
  assetValuationMethod!: string;
  priceListCost!: PriceList1;
  priceListRetail!: PriceList;
  tags!: string;
  properties!: Object;
}
