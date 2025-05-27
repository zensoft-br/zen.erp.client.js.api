import { InvoiceItem } from "./InvoiceItem.js";

export class InvoiceReturn {
  id!: number;
  invoiceItem!: InvoiceItem;
  invoiceItemReturned!: InvoiceItem;
  quantity!: number;
  tags!: string;
  properties!: any;
}
