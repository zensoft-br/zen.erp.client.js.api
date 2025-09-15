import { Company } from "../catalog/company/Company.js";
import { Invoice } from "../fiscal/Invoice.js";
import { TradeShipment } from "./TradeShipment.js";

export class TradeClearance {
  id!: number;
  status!: string;
  shipment!: TradeShipment;
  company!: Company;
  code!: string;
  date!: Date;
  invoice!: Invoice;
  tags!: string;
  properties!: any;
}
