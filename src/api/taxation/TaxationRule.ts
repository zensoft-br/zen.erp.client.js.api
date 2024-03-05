import { FiscalProfileOperation } from "../fiscal/FiscalProfileOperation.js";
import { FiscalProfilePerson } from "../fiscal/FiscalProfilePerson.js";
import { FiscalProfileProduct } from "../fiscal/FiscalProfileProduct.js";
import { TaxationOperation } from "./TaxationOperation.js";

export class TaxationRule {
  id!: number;
  flow!: string;
  fiscalProfileCompany!: FiscalProfilePerson;
  fiscalProfilePerson!: FiscalProfilePerson;
  fiscalProfileProduct!: FiscalProfileProduct;
  fiscalProfileOperation!: FiscalProfileOperation;
  taxationOperation!: TaxationOperation;
  tags!: string;
  properties!: Object;
}
