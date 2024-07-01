import { User } from "../security/User.js";
import { WorkflowNode } from "./WorkflowNode.js";
import { Workpiece } from "./Workpiece.js";

export class WorkpieceNode {
  id!: number;
  workpiece!: Workpiece;
  workflowNode!: WorkflowNode;
  dateTimeStart!: Date;
  dateTimeEnd!: Date;
  status!: string;
  user!: User;
  tags!: string;
  properties!: any;
}
