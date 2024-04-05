import { FiscalRegion } from "../FiscalRegion.js";

export class Tax {
  id!: number;
  fiscalRegion!: FiscalRegion;
  code!: string;
  type!: string;
  tags!: string;
  properties!: Object;
}
