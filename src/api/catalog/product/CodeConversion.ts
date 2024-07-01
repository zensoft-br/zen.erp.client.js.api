import { CodeConversionList } from "./CodeConversionList.js";
import { ProductPacking } from "./ProductPacking.js";
import { Unit } from "./Unit.js";

export class CodeConversion {
  id!: number;
  codeConversionList!: CodeConversionList;
  productPacking!: ProductPacking;
  unit!: Unit;
  code!: string;
  tags!: string;
  properties!: any;
}
