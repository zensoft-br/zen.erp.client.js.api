import { Account } from "./Account.js";
import { FiscalProfileProduct } from "../../fiscal/FiscalProfileProduct.js";
import { Person } from "../../catalog/person/Person.js";
import { ResultCenter } from "./ResultCenter.js";

export class AssetTag {
  id!: number;
  account!: Account;
  resultCenter!: ResultCenter;
  fiscalProfileProduct!: FiscalProfileProduct;
  person!: Person;
  batchId!: number;
}
