import { Product } from "./Product.js";
import { ProductPacking } from "./ProductPacking.js";
import { Unit } from "./Unit.js";

export class ProductUnitConversion {
  id!: number;
  product!: Product;
  productPacking!: ProductPacking;
  unit!: Unit;
  conversionFactor!: number;
  scale!: number;
  tags!: string;
  properties!: Object;
}
