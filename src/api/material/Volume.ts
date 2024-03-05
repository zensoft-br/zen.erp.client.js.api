import { OutgoingList } from "./OutgoingList.js";

export class Volume {
  id!: number;
  outgoingList!: OutgoingList;
  code!: string;
  lengthCm!: number;
  widthCm!: number;
  heightCm!: number;
  netWeightKg!: number;
  grossWeightKg!: number;
  volumeM3!: number;
  loaded!: boolean;
  tags!: string;
  properties!: Object;
}
