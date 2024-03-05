import { Bom } from "./Bom.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class BomItem {
  id!: number;
  bom!: Bom;
  code!: string;
  productPacking!: ProductPacking;
  calculationType!: string;
  expression!: string;
  quantity!: number;
  tags!: string;
  properties!: Object;
}
