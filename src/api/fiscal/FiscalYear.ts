import { AccountChart } from "../accounting/AccountChart.js";
import { Company } from "../catalog/company/Company.js";
import { ResultCenterChart } from "../accounting/ResultCenterChart.js";

export class FiscalYear {
  id!: number;
  company!: Company;
  description!: string;
  dateStart!: Date;
  dateEnd!: Date;
  notBefore!: Date;
  accountChart!: AccountChart;
  resultCenterChart!: ResultCenterChart;
  status!: string;
}
