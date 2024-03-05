import { Agent } from "./Agent.js";

export class AgentRun {
  id!: number;
  agent!: Agent;
  description!: string;
  parameters!: Object;
  tags!: string;
  properties!: Object;
}
