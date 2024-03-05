import { Person } from "../catalog/person/Person.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { StockCluster } from "./StockCluster.js";
import { Warehouse } from "./Warehouse.js";

export class StockSummary {
  id!: number;
  type!: string;
  stockCluster!: StockCluster;
  warehouse!: Warehouse;
  depositor!: Person;
  productPacking!: ProductPacking;
  stockType!: string;
  quantity!: number;
}
