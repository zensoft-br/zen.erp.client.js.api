import { AccessPoint } from "../security/AccessPoint.js";
import { Agent } from "./Agent.js";

export class AgentAccessPoint {
  id!: number;
  agent!: Agent;
  accessPoint!: AccessPoint;
  granted!: boolean;
}
