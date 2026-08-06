import { AccessProfile } from "./AccessProfile.js";
import { Person } from "../../catalog/person/Person.js";

export class User {
  status!: string;
  accessProfile!: AccessProfile;
  person!: Person;
  id!: number;
  type!: string;
  code!: string;
  description!: string;
  tags!: string;
  properties!: any;
}
