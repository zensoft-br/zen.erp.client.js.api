import { AssetTag } from "../financial/accounting/AssetTag.js";
import { Currency } from "../financial/Currency.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { PurchaseItem } from "../supply/purchase/PurchaseItem.js";
import { Sale } from "./Sale.js";
import { TaxationOperation } from "../fiscal/taxation/TaxationOperation.js";
import { TaxationRule } from "../fiscal/taxation/TaxationRule.js";

export class SaleItem {
  id!: number;
  sale!: Sale;
  productPacking!: ProductPacking;
  code!: string;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  priceListValue!: number;
  quantity!: number;
  servedQuantity!: number;
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
  taxCompensationValue!: number;
  effectiveValue!: number;
  schedule!: PurchaseItem;
  assetTag!: AssetTag;
  tags!: string;
  properties!: any;
}
