import { Session } from "../security/Session.js";

export class Log {
  id!: number;
  session!: Session;
  dateTime!: Date;
  level!: string;
  operation!: string;
  source!: string;
  contentType!: string;
  content!: string;
  expiration!: Date;
  system!: boolean;
  tags!: string;
  properties!: any;
}
