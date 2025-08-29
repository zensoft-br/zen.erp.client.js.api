import { Person } from "../catalog/person/Person.js";

export class PersonHierarchy {
  id!: number;
  personParent!: Person;
  personChild!: Person;
  tags!: string;
  properties!: any;
}
