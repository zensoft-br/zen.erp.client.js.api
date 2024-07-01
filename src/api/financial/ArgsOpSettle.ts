import { ArgsOpSettleMethod } from "./ArgsOpSettleMethod.js";
import { ArgsOpSettleSettlement } from "./ArgsOpSettleSettlement.js";

export class ArgsOpSettle {
  companyId!: number;
  personId!: number;
  date!: Date;
  settlementDate!: Date;
  settlements!: ArgsOpSettleSettlement[];
  methods!: ArgsOpSettleMethod[];
  tags!: string;
  properties!: any;
}
