import { Company } from "../catalog/company/Company.js";
import { Currency } from "../financial/Currency.js";
import { FiscalProfileOperation } from "../fiscal/FiscalProfileOperation.js";
import { IncomingRequest } from "../material/IncomingRequest.js";
import { Person } from "../catalog/person/Person.js";
import { PersonAddress } from "../catalog/person/PersonAddress.js";
import { PriceList } from "../commercial/PriceList.js";
import { PurchaseProfile } from "./PurchaseProfile.js";
import { Quote } from "./Quote.js";
import { Warehouse } from "../material/Warehouse.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class Purchase {
  id!: number;
  status!: string;
  company!: Company;
  purchaseProfile!: PurchaseProfile;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  workpiece!: Workpiece;
  warehouse!: Warehouse;
  person!: Person;
  personAddressShipping!: PersonAddress;
  code!: string;
  date!: Date;
  availabilityDate!: Date;
  freightType!: string;
  priceList!: PriceList;
  currency!: Currency;
  totalValue!: number;
  incomingRequest!: IncomingRequest;
  quote!: Quote;
  tags!: string;
  properties!: Object;
}
