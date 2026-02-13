import { AccountCategory } from "../financial/accounting/AccountCategory.js";

export class CostProfile {
  id!: number;
  code!: string;
  accountCategory!: AccountCategory;
  tags!: string;
  properties!: any;
}
