import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Volume } from "./Volume.js";

export class VolumeItem {
  id!: number;
  volume!: Volume;
  productPacking!: ProductPacking;
  quantity!: number;
}
