import { AddressProfile } from "./AddressProfile.js";
import { Warehouse } from "./Warehouse.js";

export class Address {
  id!: number;
  warehouse!: Warehouse;
  addressProfile!: AddressProfile;
  code!: string;
  status!: string;
  tags!: string;
  properties!: any;
}
