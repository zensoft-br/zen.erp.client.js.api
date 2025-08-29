import { Person } from "../catalog/person/Person.js";

export class PersonHierarchyView {
  id!: number;
  personParent!: Person;
  personChild!: Person;
  tags!: string;
  properties!: any;
}
