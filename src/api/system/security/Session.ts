import { User } from "./User.js";

export class Session {
  id!: any;
  status!: string;
  user!: User;
  dateTime!: Date;
  expiration!: Date;
  properties!: Object;
}
