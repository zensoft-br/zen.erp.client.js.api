import { Workflow } from "./Workflow.js";
import { WorkflowConnector } from "./WorkflowConnector.js";
import { WorkflowNode } from "./WorkflowNode.js";

export class ArgsWorkflowOpCreateOrUpdate {
  workflow!: Workflow;
  nodes!: WorkflowNode[];
  connectors!: WorkflowConnector[];
  type!: string;
}
