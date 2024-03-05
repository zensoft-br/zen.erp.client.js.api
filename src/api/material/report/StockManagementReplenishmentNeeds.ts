import { Company } from "../../catalog/company/Company.js";
import { Person } from "../../catalog/person/Person.js";
import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { StockAvailability } from "../StockAvailability.js";

export class StockManagementReplenishmentNeeds {
  id!: number;
  company!: Company;
  productPacking!: ProductPacking;
  stock!: number;
  stockAvailability!: StockAvailability;
  availableQuantity!: number;
  minimumStock!: number;
  missingQuantity!: number;
  replenishmentMinimum!: number;
  replenishmentBatch!: number;
  quantity!: number;
  acquisitionType!: string;
  person!: Person;
}
