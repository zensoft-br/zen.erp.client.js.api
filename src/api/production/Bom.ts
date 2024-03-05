import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class Bom {
  id!: number;
  code!: string;
  description!: string;
  productPacking!: ProductPacking;
  quantity!: number;
  tags!: string;
  properties!: Object;
}
