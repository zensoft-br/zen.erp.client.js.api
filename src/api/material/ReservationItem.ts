import { Address } from "./Address.js";
import { AssetTag } from "../financial/accounting/AssetTag.js";
import { HandlingUnit } from "./HandlingUnit.js";
import { Lot } from "./Lot.js";
import { Person } from "../catalog/person/Person.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quality } from "./Quality.js";
import { Reservation } from "./Reservation.js";
import { Serial } from "./Serial.js";
import { StockCluster } from "./StockCluster.js";
import { Warehouse } from "./Warehouse.js";

export class ReservationItem {
  id!: number;
  reservation!: Reservation;
  stockCluster!: StockCluster;
  warehouse!: Warehouse;
  address!: Address;
  depositor!: Person;
  productPacking!: ProductPacking;
  assetTag!: AssetTag;
  quality!: Quality;
  lot!: Lot;
  serial!: Serial;
  expirationDate!: Date;
  handlingUnit!: HandlingUnit;
  type!: string;
  tags!: string;
  quantity!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  value!: number;
}
