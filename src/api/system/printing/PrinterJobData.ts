import { Printer } from "./Printer.js";

export class PrinterJobData {
  data!: any;
  id!: number;
  printer!: Printer;
  status!: string;
  dateTime!: Date;
  description!: string;
  type!: string;
  tags!: string;
  properties!: any;
}
