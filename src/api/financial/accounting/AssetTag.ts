import { Account } from "./Account.js";
import { AccountComplement } from "./AccountComplement.js";
import { FiscalProfileProduct } from "../../fiscal/FiscalProfileProduct.js";

export class AssetTag {
  id!: number;
  fiscalProfileProduct!: FiscalProfileProduct;
  account!: Account;
  accountComplement!: AccountComplement;
}
