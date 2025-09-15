import { TradeContractItem } from "./TradeContractItem.js";
import { TradeShipment } from "./TradeShipment.js";
import { TradeShipmentContainer } from "./TradeShipmentContainer.js";

export class TradeShipmentItem {
  id!: number;
  shipment!: TradeShipment;
  contractItem!: TradeContractItem;
  quantity!: number;
  unitValue!: number;
  totalValue!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  clearedQuantity!: number;
  container!: TradeShipmentContainer;
  tags!: string;
  properties!: any;
}
