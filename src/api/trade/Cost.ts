import { Currency } from "../financial/Currency.js";
import { Shipment } from "./Shipment.js";

export class Cost {
  id!: number;
  shipment!: Shipment;
  type!: string;
  description!: string;
  date!: Date;
  value!: number;
  currency!: Currency;
  exchangeRate!: number;
  tags!: string;
  properties!: any;
}
