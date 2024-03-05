import { Queue } from "./Queue.js";

export class Message {
  id!: number;
  queue!: Queue;
  subject!: string;
  content!: string;
  dateTime!: Date;
  size!: number;
  exclusivityExpiration!: Date;
  reads!: number;
}
