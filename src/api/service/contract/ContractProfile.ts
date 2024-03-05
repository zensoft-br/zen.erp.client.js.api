import { Workflow } from "../../system/workflow/Workflow.js";

export class ContractProfile {
  id!: number;
  code!: string;
  description!: string;
  workflow!: Workflow;
  tags!: string;
  properties!: Object;
}
