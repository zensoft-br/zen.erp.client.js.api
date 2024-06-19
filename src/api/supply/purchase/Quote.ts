import { Company } from "../../catalog/company/Company.js";
import { FiscalProfileOperation } from "../../fiscal/FiscalProfileOperation.js";
import { Workflow } from "../../system/workflow/Workflow.js";
import { Workpiece } from "../../system/workflow/Workpiece.js";

export class Quote {
  id!: number;
  status!: string;
  company!: Company;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  workpiece!: Workpiece;
  code!: string;
  date!: Date;
  availabilityDate!: Date;
  tags!: string;
  properties!: Object;
}
