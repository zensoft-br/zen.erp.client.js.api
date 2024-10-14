import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlSupplyPurchaseQuoteItem extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "id";
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
        tmp.push(`productPacking.code=ilike=${`"${args.text}"`}`);
        this.pushFilter(tmp, "productPacking.product.description", args.text, "%", "%");

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
      `/supply/purchase/quoteItem${params.toString() ? `?${params.toString()}` : ""}`,
    );
  }

  protected getString(value: any): string | null {
    if (!value) {
      return null;
    }
    const result: string[] = [];
    result.push(`${value.id}`);
    result.push(`${value.productPacking.code}`);
    result.push(`${value.productPacking.product.description}`);
    result.push(`${value.quantity}`);
    return result.join(", ");
  }
}
