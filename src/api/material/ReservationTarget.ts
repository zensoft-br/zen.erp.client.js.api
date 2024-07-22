import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Reservation } from "./Reservation.js";
import { StockCluster } from "./StockCluster.js";

export class ReservationTarget {
  id!: number;
  reservation!: Reservation;
  stockCluster!: StockCluster;
  productPacking!: ProductPacking;
  quantity!: number;
  reservedQuantity!: number;
}
