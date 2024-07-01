import { FiscalRegion } from "./FiscalRegion.js";

export class FiscalProfileProduct {
  id!: number;
  fiscalRegion!: FiscalRegion;
  description!: string;
  tags!: string;
  properties!: any;
}
