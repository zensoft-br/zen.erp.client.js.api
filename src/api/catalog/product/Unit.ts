import { Dimension } from "./Dimension.js";

export class Unit {
  id!: number;
  dimension!: Dimension;
  code!: string;
  description!: string;
  conversionFactor!: number;
  tags!: string;
}
