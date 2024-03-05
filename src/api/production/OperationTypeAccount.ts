import { Account } from "../accounting/Account.js";
import { AccountChart } from "../accounting/AccountChart.js";
import { OperationType } from "./OperationType.js";

export class OperationTypeAccount {
  id!: number;
  operationType!: OperationType;
  accountChart!: AccountChart;
  account!: Account;
}
