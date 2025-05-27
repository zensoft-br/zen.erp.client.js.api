import { AccessPoint } from "../security/AccessPoint.js";

export class DataSource {
  id!: number;
  code!: string;
  type!: string;
  sql!: string;
  accessPoint!: AccessPoint;
  delegate!: DataSource;
  tags!: string;
  properties!: any;
}
