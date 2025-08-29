import { AssetTag } from "../financial/accounting/AssetTag.js";
import { Sale } from "./Sale.js";

export class SalePayment {
  id!: number;
  sale!: Sale;
  type!: string;
  term!: number;
  value!: number;
  assetTag!: AssetTag;
  tags!: string;
  properties!: any;
}
