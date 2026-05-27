import { Bom } from "./Bom.js";
import { ProductPacking } from "../../catalog/product/ProductPacking.js";

export class BomItem {
  id!: number;
  bom!: Bom;
  productPacking!: ProductPacking;
  bomQuantity!: number;
  type!: string;
  quantity!: number;
  tags!: string;
  properties!: any;
}
