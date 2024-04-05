import { AccountChart } from "../financial/accounting/AccountChart.js";
import { Company } from "../catalog/company/Company.js";
import { ResultCenterChart } from "../financial/accounting/ResultCenterChart.js";

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
