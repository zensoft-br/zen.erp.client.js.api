import { ArgsDataSourceOpRead } from "../data/ArgsDataSourceOpRead.js";

export class ArgsReportOpPrint {
  id!: number;
  code!: string;
  format!: string;
  parameters!: any;
  properties!: any;
  dataSource!: ArgsDataSourceOpRead;
  data!: any;
  printer!: any;
}
