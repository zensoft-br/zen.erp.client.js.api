import { CreditLine } from "../../financial/credit/CreditLine.js";
import { Currency } from "../../financial/Currency.js";
import { FiscalProfilePerson } from "../../fiscal/FiscalProfilePerson.js";
import { FiscalRegion } from "../../fiscal/FiscalRegion.js";
import { Image } from "../../system/image/Image.js";
import { MailerConfig } from "../../system/mail/MailerConfig.js";
import { Person } from "../person/Person.js";
import { PriceListCost } from "../../supply/purchase/PriceListCost.js";
import { Society } from "./Society.js";
import { StockCluster } from "../../material/StockCluster.js";
import { TargetPlan } from "../../commercial/target/TargetPlan.js";
import { Warehouse } from "../../material/Warehouse.js";

export class Company {
  id!: number;
  code!: string;
  person!: Person;
  locale!: string;
  timeZone!: string;
  society!: Society;
  fiscalRegion!: FiscalRegion;
  fiscalProfileCompany!: FiscalProfilePerson;
  currency!: Currency;
  stockCluster!: StockCluster;
  warehouse!: Warehouse;
  priceList!: PriceListCost;
  image!: Image;
  creditLine!: CreditLine;
  mailerConfig!: MailerConfig;
  targetPlan!: TargetPlan;
  tags!: string;
  properties!: any;
}
