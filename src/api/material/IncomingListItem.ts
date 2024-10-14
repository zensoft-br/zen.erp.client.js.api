import { Address } from "./Address.js";
import { HandlingUnit } from "./HandlingUnit.js";
import { IncomingList } from "./IncomingList.js";
import { Lot } from "./Lot.js";
import { Person } from "../catalog/person/Person.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quality } from "./Quality.js";
import { Serial } from "./Serial.js";
import { StockCluster } from "./StockCluster.js";

export class IncomingListItem {
  id!: number;
  incomingList!: IncomingList;
  stockCluster!: StockCluster;
  address!: Address;
  depositor!: Person;
  productPacking!: ProductPacking;
  quality!: Quality;
  lot!: Lot;
  serial!: Serial;
  expirationDate!: Date;
  handlingUnit!: HandlingUnit;
  type!: string;
  quantity!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  productPackingInvoice!: ProductPacking;
  tags!: string;
  properties!: any;
}
