import { AccessPoint } from "../security/AccessPoint.js";
import { DataSource } from "./DataSource.js";

export class DataSourceField {
  id!: number;
  dataSource!: DataSource;
  name!: string;
  accessPoint!: AccessPoint;
  tags!: string;
  properties!: any;
}
