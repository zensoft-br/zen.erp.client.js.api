import { Company } from "../../catalog/company/Company.js";
import { Session } from "./Session.js";

export class SessionContext {
  session!: Session;
  company!: Company;
}
