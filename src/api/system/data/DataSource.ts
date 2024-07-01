import { AccessPoint } from "../security/AccessPoint.js";

export class DataSource {
  id!: number;
  code!: string;
  type!: string;
  sql!: string;
  accessPoint!: AccessPoint;
  tags!: string;
  properties!: any;
}
