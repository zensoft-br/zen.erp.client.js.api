import { InvoicePayment } from "./InvoicePayment.js";
import { OutgoingInvoice } from "./OutgoingInvoice.js";

export class ArgsOutgoingInvoiceOpCreate {
  invoice!: OutgoingInvoice;
  itemList!: any[];
  paymentList!: InvoicePayment[];
}
