import { OperationType } from "./OperationType.js";
import { ProductionOrder } from "./ProductionOrder.js";

export class Operation {
  id!: number;
  productionOrder!: ProductionOrder;
  operationType!: OperationType;
  quantity!: number;
  unitValue!: number;
  totalValue!: number;
  tags!: string;
  properties!: any;
}
