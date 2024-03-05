import { IncomingInvoice } from "./IncomingInvoice.js";

export class InvoiceReference {
  id!: number;
  invoice!: IncomingInvoice;
  invoiceReference!: IncomingInvoice;
}
