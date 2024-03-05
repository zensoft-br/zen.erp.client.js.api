import { AgentRun } from "../automation/AgentRun.js";
import { Queue } from "./Queue.js";
import { Topic } from "./Topic.js";

export class Subscription {
  id!: number;
  topic!: Topic;
  protocol!: string;
  target!: string;
  queue!: Queue;
  agentRun!: AgentRun;
  tags!: string;
  properties!: Object;
}
