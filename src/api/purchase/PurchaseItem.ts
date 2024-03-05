import { Account } from "../accounting/Account.js";
import { AccountComplement } from "../accounting/AccountComplement.js";
import { FiscalProfileProduct } from "../fiscal/FiscalProfileProduct.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { Purchase } from "./Purchase.js";
import { TaxationOperation } from "../taxation/TaxationOperation.js";
import { TaxationRule } from "../taxation/TaxationRule.js";
import { Unit } from "../catalog/product/Unit.js";

export class PurchaseItem {
  id!: number;
  purchase!: Purchase;
  productPacking!: ProductPacking;
  fiscalProfileProduct!: FiscalProfileProduct;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  priceListValue!: number;
  unit!: Unit;
  quantity!: number;
  internalQuantity!: number;
  servedQuantity!: number;
  unitValue!: number;
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
  account!: Account;
  accountComplement!: AccountComplement;
  tags!: string;
  properties!: Object;
}
