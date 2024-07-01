import { AccessPoint } from "../security/AccessPoint.js";
import { WorkflowNode } from "./WorkflowNode.js";

export class WorkflowConnector {
  id!: number;
  workflowNode!: WorkflowNode;
  type!: string;
  workflowNodeTarget!: WorkflowNode;
  accessPoint!: AccessPoint;
  tags!: string;
  properties!: any;
}
