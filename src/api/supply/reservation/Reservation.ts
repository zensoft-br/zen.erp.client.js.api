import { IncomingRequestItem } from "../../material/IncomingRequestItem.js";

export class Reservation {
  id!: number;
  incomingRequestItem!: IncomingRequestItem;
  source!: string;
  quantity!: number;
  position!: number;
}
