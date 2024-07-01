import { Workflow } from "./Workflow.js";

export class WorkflowNode {
  id!: number;
  workflow!: Workflow;
  type!: string;
  code!: string;
  description!: string;
  tags!: string;
  properties!: any;
}
