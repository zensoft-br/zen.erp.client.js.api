import { Group } from "./Group.js";
import { Role } from "./Role.js";

export class Grant {
  id!: number;
  grantor!: Group;
  recipient!: Role;
}
