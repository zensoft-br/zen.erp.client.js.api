export class Queue {
  id!: number;
  code!: string;
  exclusivityTimeS!: number;
  retentionPeriodS!: number;
  maxSizeKB!: number;
  longReadWaitS!: number;
  maxReads!: number;
  deadQueue!: Queue;
  tags!: string;
  properties!: any;
}
