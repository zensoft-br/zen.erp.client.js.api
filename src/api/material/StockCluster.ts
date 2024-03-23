import { PriceList } from "../purchase/PriceList.js";
import { PriceList as PriceList1 } from "../sale/PriceList.js";

export class StockCluster {
  id!: number;
  code!: string;
  description!: string;
  assetValuationMethod!: string;
  priceListCost!: PriceList;
  priceListRetail!: PriceList;
  tags!: string;
  properties!: Object;
}
