import { DataSource } from "../data/DataSource.js";

export class Report {
  id!: number;
  code!: string;
  type!: string;
  delegate!: Report;
  dataSource!: DataSource;
  tags!: string;
  properties!: any;
}
