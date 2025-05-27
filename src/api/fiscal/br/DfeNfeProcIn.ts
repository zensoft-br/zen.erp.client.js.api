import { Company } from "../../catalog/company/Company.js";
import { File } from "../../system/file/File.js";
import { IncomingInvoice } from "../IncomingInvoice.js";

export class DfeNfeProcIn {
  status!: string;
  invoice!: IncomingInvoice;
  number!: number;
  id!: number;
  type!: string;
  statusCode!: string;
  company!: Company;
  dateTime!: Date;
  chNFe!: string;
  file!: File;
  tpEvento!: string;
  nProt!: string;
  nsu!: number;
  tags!: string;
  properties!: any;
}
