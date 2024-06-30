import { ArgsAccountDefault } from "./ArgsAccountDefault.js";

export class ArgsAccountDefaultOpRead {
  accountCategoryId!: number;
  accountCategoryCode!: string;
  accountChartId!: number;
  accountChartCode!: string;
  companyId!: number;
  date!: Date;
  restricted!: boolean;
  options!: ArgsAccountDefault;
}
