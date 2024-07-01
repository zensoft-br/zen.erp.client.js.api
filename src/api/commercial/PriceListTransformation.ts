import { PriceFormation } from "../sale/PriceFormation.js";
import { PriceList } from "./PriceList.js";

export class PriceListTransformation {
  id!: number;
  priceListSource!: PriceList;
  priceListDestination!: PriceList;
  priceFormation!: PriceFormation;
  tags!: string;
  properties!: any;
}
