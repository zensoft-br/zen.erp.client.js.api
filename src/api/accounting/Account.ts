import { AccountChart } from "./AccountChart.js";

export class Account {
  id!: number;
  accountChart!: AccountChart;
  code!: string;
  level!: number;
  type!: string;
  description!: string;
  fullDescription!: string;
  tags!: string;
  properties!: Object;
}
