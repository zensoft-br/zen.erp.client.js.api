import { Account } from "../accounting/Account.js";
import { AccountComplement } from "../accounting/AccountComplement.js";
import { FiscalProfileProduct } from "../fiscal/FiscalProfileProduct.js";
import { ProductPacking } from "../catalog/product/ProductPacking.js";
import { PurchaseItem } from "../purchase/PurchaseItem.js";
import { Sale } from "./Sale.js";
import { TaxationOperation } from "../taxation/TaxationOperation.js";
import { TaxationRule } from "../taxation/TaxationRule.js";

export class SaleItem {
  id!: number;
  sale!: Sale;
  productPacking!: ProductPacking;
  fiscalProfileProduct!: FiscalProfileProduct;
  taxationRule!: TaxationRule;
  taxationOperation!: TaxationOperation;
  priceListValue!: number;
  quantity!: number;
  servedQuantity!: number;
  unitValue!: number;
  costUnitValue!: number;
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
  schedule!: PurchaseItem;
  tags!: string;
  properties!: Object;
}
