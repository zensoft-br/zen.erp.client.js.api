import { DataSource } from "./DataSource.js";

export class DataSourceParameter {
  id!: number;
  dataSource!: DataSource;
  name!: string;
  type!: string;
  tags!: string;
  properties!: Object;
}
