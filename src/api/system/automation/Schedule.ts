import { Agent } from "./Agent.js";

export class Schedule {
  id!: number;
  code!: string;
  description!: string;
  type!: string;
  expression!: string;
  nextRun!: Date;
  lastRun!: Date;
  agent!: Agent;
  tags!: string;
  properties!: Object;
}
