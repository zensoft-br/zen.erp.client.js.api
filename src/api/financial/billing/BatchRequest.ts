import { File } from "../../system/file/File.js";
import { Wallet } from "./Wallet.js";

export class BatchRequest {
  status!: string;
  wallet!: Wallet;
  id!: number;
  datetime!: Date;
  quantity!: number;
  file!: File;
  tags!: string;
  properties!: Object;
}
