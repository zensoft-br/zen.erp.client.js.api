import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlCatalogProductProduct extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "code";
  }

  protected getAsyncIteratorZen(args: ControlSelectZenArgs): AsyncIterator<any> {
    const params = new URLSearchParams();

    // q
    {
      const q: string[] = [];

      q.push("tags!=inactive");

      // text
      if (args?.text) {
        const tmp: string[] = [];
        if (Number(args.text) === Number.parseInt(args.text, 10)) {
          tmp.push(`id==${Number.parseInt(args.text, 10)}`);
        }
        tmp.push(`code=ilike=${`'${args.text}%'`}`);
        this.pushFilter(tmp, "description", args.text, "%", "%");
        this.pushFilter(tmp, "keywords", args.text, "%", "%");
        // // tags (ficou muito amplo)
        // for (const text of args.text
        //   .split(/[ ,]+/)
        //   .map((e) => e.trim())
        //   .filter((e) => e)) {
        //   tmp.push(`tags=='${text}'`);
        // }
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
      `/catalog/product/product${
        params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    return value
      ? `${value.description}, ${value.id}${
        value.code ? `, ${value.code}` : ""
      }`
      : null;
  }
}
