import { Company } from "../catalog/company/Company.js";
import { Currency } from "../financial/Currency.js";
import { FiscalProfileOperation } from "../fiscal/FiscalProfileOperation.js";
import { OutgoingInvoice } from "../fiscal/OutgoingInvoice.js";
import { OutgoingRequest } from "../material/OutgoingRequest.js";
import { Person } from "../catalog/person/Person.js";
import { PersonAddress } from "../catalog/person/PersonAddress.js";
import { PriceList } from "./PriceList.js";
import { SaleProfile } from "./SaleProfile.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class Sale {
  id!: number;
  status!: string;
  company!: Company;
  saleProfile!: SaleProfile;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  workpiece!: Workpiece;
  person!: Person;
  personAddressShipping!: PersonAddress;
  code!: string;
  date!: Date;
  availabilityDate!: Date;
  personSalesperson!: Person;
  freightType!: string;
  personShipping!: Person;
  priceList!: PriceList;
  currency!: Currency;
  totalValue!: number;
  outgoingRequest!: OutgoingRequest;
  outgoingInvoice!: OutgoingInvoice;
  tags!: string;
  properties!: Object;
}
