import { Printer } from "./Printer.js";

export class PrinterJob {
  id!: number;
  printer!: Printer;
  status!: string;
  dateTime!: Date;
  description!: string;
  type!: string;
  tags!: string;
  properties!: any;
}
