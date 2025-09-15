import { Company } from "../catalog/company/Company.js";
import { Country } from "../catalog/location/Country.js";
import { Currency } from "../financial/Currency.js";
import { Person } from "../catalog/person/Person.js";

export class TradeContract {
  id!: number;
  status!: string;
  company!: Company;
  person!: Person;
  code!: string;
  description!: string;
  date!: Date;
  availabilityDate!: Date;
  country!: Country;
  currency!: Currency;
  totalValue!: number;
  paymentValue!: number;
  tags!: string;
  properties!: any;
}
