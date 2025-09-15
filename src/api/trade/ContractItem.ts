import { Contract } from "./Contract.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class ContractItem {
  id!: number;
  contract!: Contract;
  productPacking!: ProductPacking;
  quantity!: number;
  unitValue!: number;
  totalValue!: number;
  shippedQuantity!: number;
  clearedQuantity!: number;
  tags!: string;
  properties!: any;
}
