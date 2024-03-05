import { AccessPoint } from "./AccessPoint.js";
import { Role } from "./Role.js";

export class UserPermission {
  user!: Role;
  accessPoint!: AccessPoint;
  access!: boolean;
}
