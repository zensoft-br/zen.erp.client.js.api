import { File } from "../../system/file/File.js";

export class Batch {
  id!: number;
  datetime!: Date;
  quantity!: number;
  file!: File;
  tags!: string;
  properties!: any;
}
