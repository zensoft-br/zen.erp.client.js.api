import { Session } from "../security/Session.js";

export class Source {
  id!: number;
  entity!: string;
  entityId!: string;
  dateTime!: Date;
  session!: Session;
}
