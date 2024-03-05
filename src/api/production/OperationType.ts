import { ProductionSchema } from "./ProductionSchema.js";

export class OperationType {
  id!: number;
  productionSchema!: ProductionSchema;
  code!: string;
  tags!: string;
  properties!: Object;
}
