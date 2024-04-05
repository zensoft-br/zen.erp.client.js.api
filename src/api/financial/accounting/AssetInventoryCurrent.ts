import { AssetTag } from "./AssetTag.js";
import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { StockCluster } from "../../material/StockCluster.js";

export class AssetInventoryCurrent {
  id!: number;
  stockCluster!: StockCluster;
  productPacking!: ProductPacking;
  assetTag!: AssetTag;
  lotId!: number;
  transactionId!: number;
  dateTime!: Date;
  description!: string;
  quantity!: number;
  totalValue!: number;
  quantityBalance!: number;
  totalValueBalance!: number;
}
