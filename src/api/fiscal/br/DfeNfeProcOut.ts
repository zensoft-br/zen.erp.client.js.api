import { Company } from "../../catalog/company/Company.js";
import { File } from "../../system/file/File.js";
import { Invoice } from "../Invoice.js";

export class DfeNfeProcOut {
  status!: string;
  invoice!: Invoice;
  number!: number;
  fileDanfe!: File;
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
