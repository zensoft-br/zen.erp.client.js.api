import { City } from "../location/City.js";
import { Person } from "./Person.js";

export class PersonAddress {
  id!: number;
  person!: Person;
  description!: string;
  zipcode!: string;
  street!: string;
  number!: string;
  complement!: string;
  district!: string;
  city!: City;
  tags!: string;
  properties!: any;
}
