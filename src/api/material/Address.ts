import { Warehouse } from "./Warehouse.js";

export class Address {
  id!: number;
  warehouse!: Warehouse;
  code!: string;
  status!: string;
  tags!: string;
  properties!: Object;
}
