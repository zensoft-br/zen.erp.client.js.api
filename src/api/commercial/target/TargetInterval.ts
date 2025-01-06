import { TargetPlan } from "./TargetPlan.js";

export class TargetInterval {
  id!: number;
  targetPlan!: TargetPlan;
  description!: string;
  dateStart!: Date;
  dateEnd!: Date;
  tags!: string;
  properties!: any;
}
