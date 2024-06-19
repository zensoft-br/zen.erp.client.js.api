import { FiscalProfileOperation } from "../../fiscal/FiscalProfileOperation.js";
import { Workflow } from "../../system/workflow/Workflow.js";

export class PurchaseProfile {
  id!: number;
  code!: string;
  description!: string;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  tags!: string;
  properties!: Object;
}
