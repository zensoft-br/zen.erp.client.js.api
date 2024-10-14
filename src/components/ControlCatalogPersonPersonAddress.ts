import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlCatalogPersonPersonAddress extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "street";
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
        this.pushFilter(tmp, "street", args.text, "%", "%");
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
      `/catalog/person/personAddress${params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    const fields = [];
    fields.push(value.id);
    if (value.street) {
      fields.push(value.street);
    }
    if (value.number) {
      fields.push(value.number);
    }
    if (value.complement) {
      fields.push(value.complement);
    }
    if (value.district) {
      fields.push(value.district);
    }
    if (value.city) {
      fields.push(value.city.name);
      fields.push(value.city.state.code);
    }

    return value
      ? fields.join(", ")
      : null;
  }
}
