import { ContractItem } from "./ContractItem.js";
import { Shipment } from "./Shipment.js";
import { ShipmentContainer } from "./ShipmentContainer.js";

export class ShipmentItem {
  id!: number;
  shipment!: Shipment;
  contractItem!: ContractItem;
  quantity!: number;
  unitValue!: number;
  totalValue!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  clearedQuantity!: number;
  container!: ShipmentContainer;
  tags!: string;
  properties!: any;
}
