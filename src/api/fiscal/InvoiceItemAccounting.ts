import { AssetTag } from "../financial/accounting/AssetTag.js";
import { InvoiceItem } from "./InvoiceItem.js";

export class InvoiceItemAccounting {
  id!: number;
  invoiceItem!: InvoiceItem;
  type!: string;
  sign!: string;
  value!: number;
  assetTag!: AssetTag;
  tags!: string;
  properties!: any;
}
