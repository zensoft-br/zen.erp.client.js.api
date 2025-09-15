import { Clearance } from "./Clearance.js";
import { ShipmentItem } from "./ShipmentItem.js";

export class ClearanceItem {
  id!: number;
  clearance!: Clearance;
  shipmentItem!: ShipmentItem;
  quantity!: number;
  value!: number;
  tags!: string;
  properties!: any;
}
