import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlSystemAutomationAgent extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "description";
  }

  protected getAsyncIteratorZen(args: ControlSelectZenArgs): AsyncIterator<any> {
    const params = new URLSearchParams();

    // q
    {
      const q: string[] = [];

      // text
      if (args?.text) {
        const tmp: string[] = [];
        if (Number(args.text) === Number.parseInt(args.text, 10)) {
          tmp.push(`id==${Number.parseInt(args.text, 10)}`);
        }
        tmp.push(`description=ilike=${`'%${args.text}%'`}`);
        q.push(`(${tmp.join(",")})`); // OR
      }

      // filter
      if (args?.filter) {
        q.push(args.filter);
      }

      if (q.length) {
        params.append("q", q.join(";")); // AND
      }
    }

    // order
    if (args?.order) {
      params.append("order", args.order);
    }

    return new AsyncIteratorZen(
      `/system/automation/agent${params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    return value ? `${value.id}, ${value.description}` : null;
  }
}
