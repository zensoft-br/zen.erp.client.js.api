import { Workflow } from "../system/workflow/Workflow.js";

export class InventoryProfile {
  id!: number;
  code!: string;
  description!: string;
  workflow!: Workflow;
  tags!: string;
  properties!: any;
}
