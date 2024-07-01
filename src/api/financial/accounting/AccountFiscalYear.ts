import { AccountChart } from "./AccountChart.js";
import { FiscalYear } from "../../fiscal/FiscalYear.js";

export class AccountFiscalYear {
  fiscalYear!: FiscalYear;
  id!: number;
  accountChart!: AccountChart;
  code!: string;
  level!: number;
  type!: string;
  description!: string;
  fullDescription!: string;
  tags!: string;
  properties!: any;
}
