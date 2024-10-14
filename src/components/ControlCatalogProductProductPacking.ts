import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlCatalogProductProductPacking extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "product.description,code";
  }

  protected getAsyncIteratorZen(args: ControlSelectZenArgs): AsyncIterator<any> {
    const params = new URLSearchParams();

    // q
    {
      const q: string[] = [];

      q.push("tags!=inactive;product.tags!=inactive");

      // text
      if (args?.text) {
        const tmp: string[] = [];
        if (args.text.startsWith("#")) {
          tmp.push(`code=ilike=${`'${args.text.substring(1)}'`}`);
        } else {
          if (Number(args.text) === Number.parseInt(args.text, 10)) {
            tmp.push(`id==${Number.parseInt(args.text, 10)}`);
          }
          tmp.push(`code=ilike=${`'${args.text}%'`}`);
          tmp.push(`barcode=ilike=${`'${args.text}%'`}`);
          tmp.push(`product.code=ilike=${`'${args.text}'`}`);
          this.pushFilter(tmp, "complement", args.text, "%", "%");
          this.pushFilter(tmp, "product.description", args.text, "%", "%");
          this.pushFilter(tmp, "product.complement", args.text, "%", "%");
          this.pushFilter(tmp, "product.keywords", args.text, "%", "%");
          // Não consegui fazer busca por variante, está fazendo um inner join
          // tmp.push(`variant.id!=null;variant.code=ilike=${`'${args.text}%'`}`);
          // this.pushFilter(tmp, 'variant.description', args.text, '%', '%');
          // // tags (ficou muito amplo)
          // for (const text of args.text
          //   .split(/[ ,]+/)
          //   .map((e) => e.trim())
          //   .filter((e) => e)) {
          //   tmp.push(`product.tags=='${text}'`);
          // }
        }

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
      `/catalog/product/productPacking${params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    const result: string[] = [];
    result.push(value.code);
    result.push(value.product.description);
    result.push(value.product.unit.code);
    if (value.complement) {
      result.push(value.complement);
    }
    if (value.variant) {
      result.push(value.variant.description);
    }
    if (value.units > 1) {
      result.push(`x${value.units}`);
    }
    return result.join(", ");
  }
}
