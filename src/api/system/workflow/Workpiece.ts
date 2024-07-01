import { Workflow } from "./Workflow.js";
import { WorkflowNode } from "./WorkflowNode.js";

export class Workpiece {
  id!: number;
  source!: string;
  status!: string;
  workflow!: Workflow;
  workflowNode!: WorkflowNode;
  tags!: string;
  properties!: any;
}
