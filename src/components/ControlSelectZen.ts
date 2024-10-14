import ControlSelectAbstract from "./ControlSelectAbstract.js";

export interface ControlSelectZenArgs {
  text?: string;
  filter?: string;
  order?: string;
}

export default abstract class ControlSelectZen<
  T,
> extends ControlSelectAbstract<T, T> {
  private _id: string;

  protected _filter: string = "";

  protected _order: string = "";

  constructor(args?: any) {
    super();

    this._id = args?.id || "id";
  }

  static get observedAttributes(): string[] {
    return [
      ...ControlSelectAbstract.observedAttributes,
      "filter",
      "order",
    ];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
  ): void {
    if (name === "filter") {
      this._filter = newValue;
      if (this.connected) {
        this.refreshOptions();
      }
    }

    if (name === "order") {
      this._order = newValue;
      if (this.connected) {
        this.refreshOptions();
      }
    }
  }

  protected getIterator(text: string): AsyncIterator<T> {
    return this.getAsyncIteratorZen({
      text,
      filter: this._filter,
      order: this._order,
    });
  }

  get value(): any | any[] {
    if (this.hasAttribute("key1")) {
      if (this.hasAttribute("multiple")) {
        return this.keys;
      }
      return !this.keys.length ? null : this.keys[0];
    }

    if (this.hasAttribute("multiple")) {
      return this.values;
    }
    return !this.values.length ? null : this.values[0];
  }

  set value(value: any | any[]) {
    if (this.hasAttribute("key1")) {
      if (this.hasAttribute("multiple")) {
        this.keys = <any[]>value;
      }
      const tmp = <any>value;
      this.keys = tmp ? [tmp] : [];
    } else if (this.hasAttribute("multiple")) {
      this.values = <any[]>value;
    } else {
      const tmp = <any>value;
      this.values = tmp ? [tmp] : [];
    }
  }

  get key(): any {
    return this.keys.length ? this.keys[0] : null;
  }

  set key(key: any) {
    if (key == null) {
      this.keys = [];
    } else {
      this.keys = [key];
    }
  }

  get keys(): any[] {
    return this.values.map((o) => (<any>o)[this._id]);
  }

  set keys(keys: any[]) {
    if (keys == null || !keys.length) {
      this.values = [];
    } else {
      (async () => {
        const it = this.getAsyncIteratorZen({
          // TODO adicionar filtro do controle se presente
          filter: keys.map((key) => `${this._id}=="${key}"`).join(","),
        });
        const _values: any[] = [];
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const next = await it.next();
          if (next.done) {
            break;
          }
          _values.push(next.value);
        }
        this.values = _values;
      })();
    }
  }

  protected abstract getAsyncIteratorZen(
    args: ControlSelectZenArgs,
  ): AsyncIterator<T>;

  protected toEXT(value: T): T {
    return value;
  }

  protected toINT(value: T): T {
    return value;
  }

  protected compare(a: T, b: T): number {
    return (<any>a)[this._id] - (<any>b)[this._id];
  }

  protected pushFilter(
    criteria: string[],
    property: string,
    text: string,
    prefix: string,
    sufix: string,
  ): void {
    const args = (text ?? "").split(/[ .,]+/).filter((e) => e);
    if (!args.length) {
      return;
    }
    criteria.push(
      `(${args.map((e) => `${property}=ilike='${prefix}${e}${sufix}'`).join(";")
      })`,
    );
  }
}
