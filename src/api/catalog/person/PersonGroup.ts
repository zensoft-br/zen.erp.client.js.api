import { PriceListRetail } from "../../sale/PriceListRetail.js";

export class PersonGroup {
  id!: number;
  code!: string;
  description!: string;
  priceListRetail!: PriceListRetail;
  tags!: string;
  properties!: any;
}
