import { Account } from "./Account.js";
import { AccountCategory } from "./AccountCategory.js";
import { AccountChart } from "./AccountChart.js";
import { Person } from "../../catalog/person/Person.js";
import { Product } from "../../catalog/product/Product.js";
import { Tax } from "../../taxation/Tax.js";
import { Wallet } from "../billing/Wallet.js";

export class AccountDefault {
  id!: number;
  accountChart!: AccountChart;
  accountCategory!: AccountCategory;
  person!: Person;
  product!: Product;
  tax!: Tax;
  channelCode!: string;
  wallet!: Wallet;
  account!: Account;
  tags!: string;
  properties!: Object;
}
