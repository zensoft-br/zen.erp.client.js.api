import { Workflow } from "./Workflow.js";
import { WorkflowNode } from "./WorkflowNode.js";

export class Workpiece {
  id!: number;
  status!: string;
  workflow!: Workflow;
  workflowNode!: WorkflowNode;
  tags!: string;
  properties!: Object;
}
