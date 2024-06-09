import { Company } from "../catalog/company/Company.js";
import { FiscalProfileOperation } from "./FiscalProfileOperation.js";
import { FiscalProfilePerson } from "./FiscalProfilePerson.js";
import { InvoiceSeries } from "./InvoiceSeries.js";
import { JournalEntry } from "../financial/accounting/JournalEntry.js";
import { Person } from "../catalog/person/Person.js";
import { PersonAddress } from "../catalog/person/PersonAddress.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class Invoice {
  id!: number;
  source!: string;
  company!: Company;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  workpiece!: Workpiece;
  person!: Person;
  personAddressShipping!: PersonAddress;
  fiscalProfilePerson!: FiscalProfilePerson;
  returned!: boolean;
  invoiceSeries!: InvoiceSeries;
  number!: number;
  date!: Date;
  issueDate!: Date;
  shippingDateTime!: Date;
  grossWeightKg!: number;
  netWeightKg!: number;
  volumeM3!: number;
  totalValue!: number;
  personSalesperson!: Person;
  personShipping!: Person;
  freightType!: string;
  journalEntry!: JournalEntry;
  tags!: string;
  properties!: Object;
}
