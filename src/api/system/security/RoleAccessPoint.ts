import { AccessPoint } from "./AccessPoint.js";
import { Role } from "./Role.js";

export class RoleAccessPoint {
  id!: number;
  role!: Role;
  accessPoint!: AccessPoint;
}
