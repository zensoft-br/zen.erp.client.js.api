import { AssetTag } from "../../financial/accounting/AssetTag.js";
import { Purchase } from "./Purchase.js";

export class PurchasePayment {
  id!: number;
  purchase!: Purchase;
  type!: string;
  term!: number;
  value!: number;
  assetTag!: AssetTag;
  tags!: string;
  properties!: any;
}
