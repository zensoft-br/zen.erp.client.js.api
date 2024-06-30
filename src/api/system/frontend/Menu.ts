export class Menu {
  label!: string;
  accessPoint!: string;
  icon!: string;
  path!: string;
  tags!: string;
  children!: Map<string,Menu>;
}
