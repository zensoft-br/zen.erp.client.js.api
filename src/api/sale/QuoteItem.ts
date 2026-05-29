import { Currency } from "../financial/Currency.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Quote } from "./Quote.js";
import { TaxationOperation } from "../fiscal/taxation/TaxationOperation.js";
import { TaxationRule } from "../fiscal/taxation/TaxationRule.js";

export class QuoteItem {
  id!: number;
  status!: string;
  quote!: Quote;
  itemSequence!: number;
  proposalSequence!: number;
  productPacking!: ProductPacking;
  code!: string;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  priceListValue!: number;
  quantity!: number;
  unitValue!: number;
  currency!: Currency;
  costUnitValue!: number;
  grossProductValue!: number;
  discountType!: string;
  discountAmount!: number;
  discountValue!: number;
  productValue!: number;
  otherValues!: Map<string,number>;
  operationValue!: number;
  insideTaxValue!: number;
  outsideTaxValue!: number;
  totalValue!: number;
  tags!: string;
  properties!: any;
}
