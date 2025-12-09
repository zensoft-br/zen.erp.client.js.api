export class Job {
  id!: number;
  status!: string;
  operation!: string;
  created!: Date;
  started!: Date;
  finished!: Date;
  stepTotal!: number;
  stepCount!: number;
  tags!: string;
  properties!: any;
}
