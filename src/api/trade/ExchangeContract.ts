import { Company } from "../catalog/company/Company.js";
import { Currency } from "../financial/Currency.js";
import { ExchangeContractProfile } from "./ExchangeContractProfile.js";
import { Person } from "../catalog/person/Person.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class ExchangeContract {
  id!: number;
  status!: string;
  workflow!: Workflow;
  workpiece!: Workpiece;
  exchangeContractProfile!: ExchangeContractProfile;
  company!: Company;
  person!: Person;
  personAgent!: Person;
  code!: string;
  description!: string;
  date!: Date;
  currency!: Currency;
  value!: number;
  allocatedValue!: number;
  paymentValue!: number;
  exchangeRate!: number;
  tags!: string;
  properties!: any;
}
