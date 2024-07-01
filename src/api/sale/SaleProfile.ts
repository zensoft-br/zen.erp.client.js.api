import { FiscalProfileOperation } from "../fiscal/FiscalProfileOperation.js";
import { PickingProfile } from "../material/PickingProfile.js";
import { Warehouse } from "../material/Warehouse.js";
import { Workflow } from "../system/workflow/Workflow.js";

export class SaleProfile {
  id!: number;
  code!: string;
  description!: string;
  fiscalProfileOperation!: FiscalProfileOperation;
  workflow!: Workflow;
  warehouse!: Warehouse;
  invoiceSeriesTag!: string;
  pickingProfile!: PickingProfile;
  tags!: string;
  properties!: any;
}
