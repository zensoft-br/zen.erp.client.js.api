import { AssetTag } from "../../financial/accounting/AssetTag.js";
import { Currency } from "../../financial/Currency.js";
import { ProductPacking } from "../../catalog/product/ProductPacking.js";
import { Purchase } from "./Purchase.js";
import { TaxationOperation } from "../../fiscal/taxation/TaxationOperation.js";
import { TaxationRule } from "../../fiscal/taxation/TaxationRule.js";
import { Unit } from "../../catalog/product/Unit.js";

export class PurchaseItem {
  id!: number;
  purchase!: Purchase;
  productPacking!: ProductPacking;
  code!: string;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  priceListValue!: number;
  unit!: Unit;
  quantity!: number;
  internalQuantity!: number;
  servedQuantity!: number;
  unitValue!: number;
  currency!: Currency;
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
  taxCompensationValue!: number;
  effectiveValue!: number;
  assetTag!: AssetTag;
  tags!: string;
  properties!: any;
}
