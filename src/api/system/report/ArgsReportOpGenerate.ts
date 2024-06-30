import { ArgsDataSourceOpRead } from "../data/ArgsDataSourceOpRead.js";

export class ArgsReportOpGenerate {
  id!: number;
  code!: string;
  format!: string;
  parameters!: Object;
  properties!: Object;
  dataSource!: ArgsDataSourceOpRead;
  printer!: any;
}
