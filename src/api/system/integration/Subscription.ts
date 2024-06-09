import { Agent } from "../automation/Agent.js";
import { Queue } from "./Queue.js";
import { Topic } from "./Topic.js";

export class Subscription {
  id!: number;
  topic!: Topic;
  protocol!: string;
  target!: string;
  queue!: Queue;
  agent!: Agent;
  tags!: string;
  properties!: Object;
}
