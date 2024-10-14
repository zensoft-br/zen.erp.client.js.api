import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlSupplyPurchasePurchaseItem extends ControlSelectZen<any> {
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
          // tmp.push(`number==${`'${Number.parseInt(args.text, 10)}'`}`);
        }
        // this.pushFilter(tmp, "person.name", args.text, "%", "%");
        // this.pushFilter(tmp, "person.fantasyName", args.text, "%", "%");
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
      `/supply/purchase/purchaseItem${params.toString() ? `?${params.toString()}` : ""}`,
    );
  }

  protected getString(value: any): string | null {
    if (!value) {
      return null;
    }
    const result: string[] = [];
    result.push(`${value.purchase.id}`);
    result.push(`${value.purchase.status}`);
    result.push(`${(<any> window).zen?.ctx.i18n.formatDate(value.purchase.availabilityDate)}`);
    result.push(`${value.purchase.person.fantasyName ?? value.purchase.person.name}`);
    result.push(`${value.productPacking.code}`);
    result.push(`${(<any> window).zen?.ctx.i18n.formatNumber(value.quantity) + value.productPacking.product.unit.code}`);
    return result.join(", ");
  }
}
