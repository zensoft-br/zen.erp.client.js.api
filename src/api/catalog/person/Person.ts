import { Category } from "../Category.js";
import { City } from "../location/City.js";
import { CodeConversionList } from "../product/CodeConversionList.js";
import { Country } from "../location/Country.js";
import { FiscalProfilePerson } from "../../fiscal/FiscalProfilePerson.js";
import { PersonGroup } from "./PersonGroup.js";

export class Person {
  id!: number;
  type!: string;
  name!: string;
  fantasyName!: string;
  nationality!: Country;
  documentType!: string;
  documentNumber!: string;
  document2Type!: string;
  document2Number!: string;
  zipcode!: string;
  street!: string;
  number!: string;
  complement!: string;
  district!: string;
  city!: City;
  email!: string;
  phone!: string;
  comments!: string;
  codeConversionList!: CodeConversionList;
  fiscalProfilePerson!: FiscalProfilePerson;
  personGroup!: PersonGroup;
  category1!: Category;
  category2!: Category;
  category3!: Category;
  category4!: Category;
  category5!: Category;
  tags!: string;
  properties!: any;
}
