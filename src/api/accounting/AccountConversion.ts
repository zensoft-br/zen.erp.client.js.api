import { Account } from "./Account.js";
import { AccountConversionChart } from "./AccountConversionChart.js";

export class AccountConversion {
  id!: number;
  accountConversionChart!: AccountConversionChart;
  accountSource!: Account;
  accountDestination!: Account;
}
