import { Cost } from "./Cost.js";
import { ShipmentItem } from "./ShipmentItem.js";

export class CostAllocation {
  id!: number;
  cost!: Cost;
  shipmentItem!: ShipmentItem;
  value!: number;
  tags!: string;
  properties!: any;
}
