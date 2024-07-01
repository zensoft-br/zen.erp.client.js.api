import { Tax } from "./Tax.js";

export class Taxation {
  id!: number;
  source!: string;
  tax!: Tax;
  taxType!: string;
  grossBaseValueExpression!: string;
  grossBaseValue!: number;
  grossBaseValueVariationRate!: number;
  baseValue!: number;
  taxRate!: number;
  grossTaxValue!: number;
  taxAdjustmentExpression!: string;
  taxAdjustmentValue!: number;
  taxValue!: number;
  compensationRate!: number;
  compensationValue!: number;
  tags!: string;
  properties!: any;
}
