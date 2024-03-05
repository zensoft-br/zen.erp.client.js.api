import { Company } from "../catalog/company/Company.js";
import { FiscalProfileOperation } from "../fiscal/FiscalProfileOperation.js";
import { FiscalProfilePerson } from "../fiscal/FiscalProfilePerson.js";
import { Person } from "../catalog/person/Person.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class Quote {
  id!: number;
  status!: string;
  company!: Company;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  workpiece!: Workpiece;
  person!: Person;
  fiscalProfilePerson!: FiscalProfilePerson;
  code!: string;
  date!: Date;
  availabilityDate!: Date;
  personSalesperson!: Person;
  totalValue!: number;
  tags!: string;
  properties!: Object;
}
