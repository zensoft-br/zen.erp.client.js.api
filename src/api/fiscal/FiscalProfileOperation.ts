import { FiscalRegion } from "./FiscalRegion.js";

export class FiscalProfileOperation {
  id!: number;
  fiscalRegion!: FiscalRegion;
  code!: string;
  description!: string;
  tags!: string;
  properties!: Object;
}
