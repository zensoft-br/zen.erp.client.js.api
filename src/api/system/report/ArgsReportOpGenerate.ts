import { ArgsDataSourceOpRead } from "../data/ArgsDataSourceOpRead.js";

export class ArgsReportOpGenerate {
  id!: number;
  code!: string;
  format!: string;
  parameters!: any;
  properties!: any;
  dataSource!: ArgsDataSourceOpRead;
  printer!: any;
}
