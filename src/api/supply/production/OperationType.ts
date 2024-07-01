import { ProductionProfile } from "./ProductionProfile.js";

export class OperationType {
  id!: number;
  productionProfile!: ProductionProfile;
  code!: string;
  tags!: string;
  properties!: any;
}
