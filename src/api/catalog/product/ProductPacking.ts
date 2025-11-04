import { Image } from "../../system/image/Image.js";
import { Product } from "./Product.js";
import { ProductVariant } from "./ProductVariant.js";

export class ProductPacking {
  id!: number;
  product!: Product;
  variant!: ProductVariant;
  code!: string;
  complement!: string;
  barcode!: string;
  units!: number;
  lengthCm!: number;
  widthCm!: number;
  heightCm!: number;
  volumeM3!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  image!: Image;
  productPackingStock!: ProductPacking;
  tags!: string;
  properties!: any;
}
