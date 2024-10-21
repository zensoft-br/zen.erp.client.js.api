import { Unit } from "./Unit.js";

export class ProductProfile {
  id!: number;
  code!: string;
  description!: string;
  unit!: Unit;
  tags!: string;
  properties!: any;
}
