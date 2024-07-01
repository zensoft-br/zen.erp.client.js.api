import { Person } from "../catalog/person/Person.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { StockManagement } from "./StockManagement.js";

export class StockManagementItem {
  id!: number;
  stockManagement!: StockManagement;
  productPacking!: ProductPacking;
  averageDailyConsumption!: number;
  replenishmentTimeDays!: number;
  safetyStockPercentage!: number;
  minimumStock!: number;
  replenishmentMinimum!: number;
  replenishmentBatch!: number;
  acquisitionType!: string;
  person!: Person;
  tags!: string;
  properties!: any;
}
