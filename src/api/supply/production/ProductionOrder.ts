import { Company } from "../../catalog/company/Company.js";
import { Person } from "../../catalog/person/Person.js";
import { ProductionProfile } from "./ProductionProfile.js";
import { Workflow } from "../../system/workflow/Workflow.js";
import { Workpiece } from "../../system/workflow/Workpiece.js";

export class ProductionOrder {
  id!: number;
  source!: string;
  company!: Company;
  status!: string;
  productionProfile!: ProductionProfile;
  workflow!: Workflow;
  workpiece!: Workpiece;
  code!: string;
  person!: Person;
  date!: Date;
  availabilityDate!: Date;
  tags!: string;
  properties!: any;
}
