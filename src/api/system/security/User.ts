import { AccessProfile } from "./AccessProfile.js";

export class User {
  status!: string;
  accessProfile!: AccessProfile;
  id!: number;
  type!: string;
  code!: string;
  description!: string;
  tags!: string;
  properties!: Object;
}
