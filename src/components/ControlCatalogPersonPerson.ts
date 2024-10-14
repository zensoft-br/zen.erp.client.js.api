import ControlSelectZen, {
  ControlSelectZenArgs,
} from "./ControlSelectZen.js";
import AsyncIteratorZen from "./AsyncIteratorZen.js";

export default class ControlCatalogPersonPerson extends ControlSelectZen<any> {
  constructor() {
    super();
    this._order = "name";
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
        this.pushFilter(tmp, "name", args.text, "%", "%");
        this.pushFilter(tmp, "fantasyName", args.text, "%", "%");
        tmp.push(`documentNumber=ilike=${`'${args.text}%'`}`);
        // Desabilitei a pesquisa por phone e email porque o hibertate
        // estava gerando um inner join, e estas propriedades são nullable
        // tmp.push(`phone=ilike=${`'%${args.text}%'`}`);
        // tmp.push(`email=ilike=${`'${args.text}%'`}`);
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
      `/catalog/person/person${params.toString() ? `?${params.toString()}` : ""
      }`,
    );
  }

  protected getString(value: any): string | null {
    return value
      ? `${value.id}, ${value.name}${value.fantasyName ? `, ${value.fantasyName}` : ""}${value.documentNumber ? `, ${value.documentNumber}` : ""}`
      : null;
  }
}
