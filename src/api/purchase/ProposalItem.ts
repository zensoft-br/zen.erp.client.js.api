import { Currency } from "../financial/Currency.js";
import { FiscalProfileProduct } from "../fiscal/FiscalProfileProduct.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Proposal } from "./Proposal.js";
import { QuoteItem } from "./QuoteItem.js";
import { TaxationOperation } from "../taxation/TaxationOperation.js";
import { TaxationRule } from "../taxation/TaxationRule.js";
import { Unit } from "../catalog/product/Unit.js";

export class ProposalItem {
  id!: number;
  status!: string;
  proposal!: Proposal;
  quoteItem!: QuoteItem;
  availabilityDate!: Date;
  productPacking!: ProductPacking;
  fiscalProfileProduct!: FiscalProfileProduct;
  unit!: Unit;
  quantity!: number;
  internalQuantity!: number;
  approvedQuantity!: number;
  currency!: Currency;
  unitValue!: number;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  productValue!: number;
  discountType!: string;
  discountAmount!: number;
  discountValue!: number;
  otherValues!: Object;
  operationValue!: number;
  insideTaxValue!: number;
  outsideTaxValue!: number;
  totalValue!: number;
  taxCompensationValue!: number;
  effectiveValue!: number;
  tags!: string;
  properties!: Object;
}
