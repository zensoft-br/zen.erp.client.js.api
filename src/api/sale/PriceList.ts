import { Currency } from "../financial/Currency.js";

export class PriceList {
  id!: number;
  type!: string;
  code!: string;
  description!: string;
  notBefore!: Date;
  notAfter!: Date;
  currency!: Currency;
  variationRateLow!: number;
  variationRateHigh!: number;
  tags!: string;
  properties!: any;
}
