import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Reservation } from "./Reservation.js";

export class ReservationTarget {
  id!: number;
  reservation!: Reservation;
  productPacking!: ProductPacking;
  quantity!: number;
  reservedQuantity!: number;
}
