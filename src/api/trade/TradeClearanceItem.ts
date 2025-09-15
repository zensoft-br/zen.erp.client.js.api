import { TradeClearance } from "./TradeClearance.js";
import { TradeShipmentItem } from "./TradeShipmentItem.js";

export class TradeClearanceItem {
  id!: number;
  clearance!: TradeClearance;
  shipmentItem!: TradeShipmentItem;
  quantity!: number;
  value!: number;
  tags!: string;
  properties!: any;
}
