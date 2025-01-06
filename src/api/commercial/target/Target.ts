import { TargetGroup } from "./TargetGroup.js";
import { TargetInterval } from "./TargetInterval.js";

export class Target {
  id!: number;
  targetInterval!: TargetInterval;
  targetGroup!: TargetGroup;
  metric!: string;
  value!: number;
  tags!: string;
  properties!: any;
}
