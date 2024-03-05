import { IncomingRequest } from "./IncomingRequest.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";

export class IncomingRequestItem {
  id!: number;
  status!: string;
  incomingRequest!: IncomingRequest;
  productPacking!: ProductPacking;
  quantity!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  servedQuantity!: number;
  reservedQuantity!: number;
}
