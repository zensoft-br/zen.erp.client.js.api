import { Address } from "./Address.js";

export class Message {
  from!: Address;
  repplyTo!: any;
  to!: any;
  cc!: any;
  bcc!: any;
  subject!: string;
  content!: string;
  mimeType!: string;
  attachments!: any;
  source!: string;
}
