import { AgentRun } from "./AgentRun.js";

export class Schedule {
  id!: number;
  code!: string;
  description!: string;
  type!: string;
  expression!: string;
  nextRun!: Date;
  lastRun!: Date;
  agentRun!: AgentRun;
  tags!: string;
  properties!: Object;
}
