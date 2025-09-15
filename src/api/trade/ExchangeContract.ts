import { Company } from "../catalog/company/Company.js";
import { Currency } from "../financial/Currency.js";
import { Person } from "../catalog/person/Person.js";

export class ExchangeContract {
  id!: number;
  status!: string;
  company!: Company;
  person!: Person;
  code!: string;
  description!: string;
  date!: Date;
  currency!: Currency;
  value!: number;
  paymentValue!: number;
  tags!: string;
  properties!: any;
}
