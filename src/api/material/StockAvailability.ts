import { Company } from "../catalog/company/Company.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Schedule } from "./Schedule.js";
import { StockCluster } from "./StockCluster.js";

export class StockAvailability {
  id!: number;
  type!: string;
  subtype!: string;
  stockCluster!: StockCluster;
  company!: Company;
  productPacking!: ProductPacking;
  date!: Date;
  schedule!: Schedule;
  quantity!: number;
}
