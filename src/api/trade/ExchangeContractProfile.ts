import { Account } from "../financial/accounting/Account.js";

export class ExchangeContractProfile {
  id!: number;
  code!: string;
  account!: Account;
  tags!: string;
  properties!: any;
}
