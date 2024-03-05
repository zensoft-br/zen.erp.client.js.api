import { AccessPoint } from "./security/AccessPoint.js";

export class Status {
  id!: number;
  entity!: string;
  code!: string;
  description!: string;
  accessPoint!: AccessPoint;
  tags!: string;
  properties!: Object;
}
