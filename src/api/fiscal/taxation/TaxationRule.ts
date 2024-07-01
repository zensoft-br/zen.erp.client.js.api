import { FiscalProfileOperation } from "../FiscalProfileOperation.js";
import { FiscalProfilePerson } from "../FiscalProfilePerson.js";
import { FiscalProfileProduct } from "../FiscalProfileProduct.js";
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
  properties!: any;
}
