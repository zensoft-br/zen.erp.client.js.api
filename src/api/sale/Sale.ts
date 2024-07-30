import { Company } from "../catalog/company/Company.js";
import { Currency } from "../financial/Currency.js";
import { FiscalProfileOperation } from "../fiscal/FiscalProfileOperation.js";
import { OutgoingInvoice } from "../fiscal/OutgoingInvoice.js";
import { Person } from "../catalog/person/Person.js";
import { PersonAddress } from "../catalog/person/PersonAddress.js";
import { PickingOrder } from "../material/PickingOrder.js";
import { PriceListRetail } from "./PriceListRetail.js";
import { SaleProfile } from "./SaleProfile.js";
import { Shipment } from "../shipping/Shipment.js";
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
  priceList!: PriceListRetail;
  currency!: Currency;
  totalValue!: number;
  pickingOrder!: PickingOrder;
  shipment!: Shipment;
  outgoingInvoice!: OutgoingInvoice;
  tags!: string;
  properties!: any;
}
