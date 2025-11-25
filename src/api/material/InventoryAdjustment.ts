import { Address } from "./Address.js";
import { AssetTag } from "../financial/accounting/AssetTag.js";
import { HandlingUnit } from "./HandlingUnit.js";
import { Inventory } from "./Inventory.js";
import { Lot } from "./Lot.js";
import { Person } from "../catalog/person/Person.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quality } from "./Quality.js";
import { Serial } from "./Serial.js";
import { StockCluster } from "./StockCluster.js";

export class InventoryAdjustment {
  id!: number;
  inventory!: Inventory;
  sourceId!: number;
  stockCluster!: StockCluster;
  address!: Address;
  productPacking!: ProductPacking;
  depositor!: Person;
  assetTag!: AssetTag;
  quality!: Quality;
  lot!: Lot;
  serial!: Serial;
  expirationDate!: Date;
  handlingUnit!: HandlingUnit;
  type!: string;
  tags!: string;
  quantity!: number;
  properties!: any;
}
