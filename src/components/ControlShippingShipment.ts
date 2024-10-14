import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlShippingShipment extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "id";
  }

  protected getAsyncIteratorZen(args: ControlSelectZenArgs): AsyncIterator<any> {
    const params = new URLSearchParams();

    // q
    {
      const q: string[] = [];

      // q.push("tags!=inactive");

      // text
      if (args?.text) {
        const tmp: string[] = [];
        if (Number(args.text) === Number.parseInt(args.text, 10)) {
          tmp.push(`id==${Number.parseInt(args.text, 10)}`);
        }
        // this.pushFilter(tmp, "description", args.text, "%", "%");
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
    params.append("order", args?.order || "id");

    return new AsyncIteratorZen(
      `/shipping/shipment${params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    return value ? `${value.id} ${value.status} ${(<any> window).zen?.ctx.i18n.formatDate(value.date)} ${value.person.name}` : null;
  }
}
