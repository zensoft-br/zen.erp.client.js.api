import { Person } from "../catalog/person/Person.js";
import { Workflow } from "../system/workflow/Workflow.js";
import { Workpiece } from "../system/workflow/Workpiece.js";

export class Shipment {
  id!: number;
  status!: string;
  workflow!: Workflow;
  workpiece!: Workpiece;
  person!: Person;
  code!: string;
  number!: string;
  description!: string;
  date!: Date;
  availabilityDate!: Date;
  boardingEstimateDate!: Date;
  boardingDate!: Date;
  boardingPort!: string;
  arrivalEstimateDate!: Date;
  arrivalDate!: Date;
  arrivalPort!: string;
  demurrageFreeTimeDays!: number;
  demurrageFee!: number;
  tags!: string;
  properties!: any;
}
