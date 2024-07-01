import { FiscalRegion } from "./FiscalRegion.js";

export class FiscalProfilePerson {
  id!: number;
  fiscalRegion!: FiscalRegion;
  description!: string;
  tags!: string;
  properties!: any;
}
