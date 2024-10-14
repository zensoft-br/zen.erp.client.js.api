import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlMaterialStockType extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "code";
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
        tmp.push(`code=ilike=${`'%${args.text}%'`}`);
        q.push(`(${tmp.join(",")})`); // OR
        q.push("tags!=inactive");
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
      `/material/stockType${params.toString() ? `?${params.toString()}` : ""}`,
    );
  }

  protected getString(value: any): string | null {
    if (value == null) {
      return null;
    }

    const key = `/material/stockType/code/${value.code}`;
    const s = (<any> window).zen?.ctx.i18n.getResource(key);
    return s === key ? value.code : `${value.code}, ${s}`;
  }
}
