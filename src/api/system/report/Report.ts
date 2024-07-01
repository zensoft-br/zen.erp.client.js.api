export class Report {
  id!: number;
  code!: string;
  type!: string;
  delegate!: Report;
  tags!: string;
  properties!: any;
}
