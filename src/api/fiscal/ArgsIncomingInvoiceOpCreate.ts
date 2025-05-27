import { IncomingInvoice } from "./IncomingInvoice.js";
import { InvoicePayment } from "./InvoicePayment.js";

export class ArgsIncomingInvoiceOpCreate {
  invoice!: IncomingInvoice;
  itemList!: any[];
  paymentList!: InvoicePayment[];
  prepare!: boolean;
  approve!: boolean;
}
