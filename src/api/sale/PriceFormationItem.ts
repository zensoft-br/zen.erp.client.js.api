import { PriceFormation } from "./PriceFormation.js";

export class PriceFormationItem {
  id!: number;
  priceFormation!: PriceFormation;
  code!: string;
  description!: string;
  type!: string;
  expression!: string;
  tags!: string;
  properties!: any;
}
