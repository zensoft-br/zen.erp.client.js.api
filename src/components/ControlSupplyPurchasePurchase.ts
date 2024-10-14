import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlSupplyPurchasePurchase extends ControlSelectZen<any> {
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
        this.pushFilter(tmp, "code", args.text, "", "%");
        this.pushFilter(tmp, "person.name", args.text, "%", "%");
        this.pushFilter(tmp, "person.fantasyName", args.text, "%", "%");
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
      `/supply/purchase/purchase${params.toString() ? `?${params.toString()}` : ""}`,
    );
  }

  protected getString(value: any): string | null {
    if (!value) {
      return null;
    }
    const result: string[] = [];
    result.push(`${value.id}`);
    if (value.code) {
      result.push(`${value.code}`);
    }
    result.push(`${value.status}`);
    result.push(`${(<any>window).zen?.ctx.i18n.formatDate(value.date)}`);
    result.push(`${value.person.fantasyName || value.person.name}`);
    // result.push(`${(<any>window).zen?.ctx.i18n.formatCurrency(value.totalValue, value.company.currency.code)}`);
    return result.join(", ");
  }
}
