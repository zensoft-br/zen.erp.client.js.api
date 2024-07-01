import { Country } from "./Country.js";

export class State {
  id!: number;
  code!: string;
  name!: string;
  country!: Country;
  tags!: string;
  properties!: any;
}
