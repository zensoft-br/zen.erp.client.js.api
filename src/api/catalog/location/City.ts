import { State } from "./State.js";

export class City {
  id!: number;
  name!: string;
  state!: State;
  tags!: string;
  properties!: any;
}
