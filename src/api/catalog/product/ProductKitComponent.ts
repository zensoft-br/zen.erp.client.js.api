import { Product } from "./Product.js";
import { ProductPacking } from "./ProductPacking.js";

export class ProductKitComponent {
  id!: number;
  product!: Product;
  productPacking!: ProductPacking;
  quantity!: number;
  tags!: string;
  properties!: Object;
}
