import { Account } from "../financial/accounting/Account.js";
import { AccountComplement } from "../financial/accounting/AccountComplement.js";
import { AssetTag } from "../financial/accounting/AssetTag.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { TaxationOperation } from "./taxation/TaxationOperation.js";
import { TaxationRule } from "./taxation/TaxationRule.js";
import { Unit } from "../catalog/product/Unit.js";

export class InvoiceItem {
  OTHER_VALUES_FREIGHT!: string;
  OTHER_VALUES_INSURANCE!: string;
  OTHER_VALUES_OTHER!: string;
  id!: number;
  accountingType!: string;
  productPacking!: ProductPacking;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  quantity!: number;
  unit!: Unit;
  physicalProductPacking!: ProductPacking;
  physicalQuantity!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  unitValue!: number;
  productValue!: number;
  discountValue!: number;
  otherValues!: Map<string,number>;
  operationValue!: number;
  insideTaxValue!: number;
  outsideTaxValue!: number;
  totalValue!: number;
  taxCompensationValue!: number;
  effectiveValue!: number;
  assetTag!: AssetTag;
  account!: Account;
  accountComplement!: AccountComplement;
  tags!: string;
  properties!: any;
}
