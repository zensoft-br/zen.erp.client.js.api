import { ShipmentItem } from "./ShipmentItem.js";
import { TradeCost } from "./TradeCost.js";

export class TradeCostAllocation {
  id!: number;
  cost!: TradeCost;
  shipmentItem!: ShipmentItem;
  value!: number;
  tags!: string;
  properties!: any;
}
