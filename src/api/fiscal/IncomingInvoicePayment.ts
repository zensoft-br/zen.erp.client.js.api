import { AssetTag } from "../financial/accounting/AssetTag.js";
import { Invoice } from "./Invoice.js";

export class IncomingInvoicePayment {
  id!: number;
  invoice!: Invoice;
  type!: string;
  dueDate!: Date;
  value!: number;
  assetTag!: AssetTag;
  tags!: string;
  properties!: any;
}
