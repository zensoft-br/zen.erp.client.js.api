import { Account } from "../../financial/accounting/Account.js";
import { AccountChart } from "../../financial/accounting/AccountChart.js";
import { OperationType } from "./OperationType.js";

export class OperationTypeAccount {
  id!: number;
  operationType!: OperationType;
  accountChart!: AccountChart;
  account!: Account;
}
