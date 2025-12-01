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
  description!: string;
  date!: Date;
  tags!: string;
  properties!: any;
}
