import { Company } from "../../catalog/company/Company.js";
import { ContractIndex } from "./ContractIndex.js";
import { ContractItem } from "./ContractItem.js";
import { ContractProfile } from "./ContractProfile.js";
import { Person } from "../../catalog/person/Person.js";
import { Workflow } from "../../system/workflow/Workflow.js";
import { Workpiece } from "../../system/workflow/Workpiece.js";

export class ContractFull {
  itemList!: ContractItem[];
  id!: number;
  status!: string;
  company!: Company;
  contractProfile!: ContractProfile;
  workflow!: Workflow;
  workpiece!: Workpiece;
  person!: Person;
  code!: string;
  dateStart!: Date;
  dateEnd!: Date;
  billingCycle!: string;
  billingInterval!: number;
  billingGraceDays!: number;
  billingLastDate!: Date;
  billingNextDate!: Date;
  contractIndex!: ContractIndex;
  contractIndexValue!: number;
  adjustmentCycle!: string;
  adjustmentInterval!: number;
  adjustmentLastDate!: Date;
  adjustmentNextDate!: Date;
  totalValue!: number;
  tags!: string;
  properties!: any;
}
