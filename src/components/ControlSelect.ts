import ControlSelectAbstract from "./ControlSelectAbstract.js";

interface Tuple {
  value: string;
  text: string;
}

export default class ControlSelect extends ControlSelectAbstract<
  Tuple,
  string
> {
  private _options: Tuple[] = [];

  // constructor() {
  //   super();
  //   this._fetchSize = 1000;
  // }

  connectedCallback(): void {
    // Load _options from the original <option> elements and remove them
    if (this._options == null) {
      this._options = [];

      this.root.querySelectorAll("option").forEach((option) => {
        this._options.push({
          value: option.value ? option.value : (option.textContent ?? "").trim(),
          text: (option.textContent ?? "").trim(),
        });
        option.remove();
      });
    }

    // Translate option's text
    (async () => {
      for (const option of this._options) {
        // option.text = await (<any> window).zen?.ctx.i18n.getResourceA(option.text);
      }
    })();

    super.connectedCallback();
  }

  protected getIterator(text: string): AsyncIterator<Tuple> {
    let options: Tuple[];
    if (text) {
      options = this._options.filter((e) => e.text.toLowerCase().includes(text.toLowerCase()));
    } else {
      options = this._options;
    }
    // const range = {
    //   [Symbol.asyncIterator]() {
    //     return {
    //       current: 0,
    //       async next() {
    //         if (this.current < options.length) {
    //           return { done: false, value: options[this.current++] };
    //         }
    //         return { done: true, value: null };
    //       },
    //     };
    //   },
    // };
    // return range[Symbol.asyncIterator]();
    let current = 0;
    return {
      async next() {
        if (current < options.length) {
          return { done: false, value: options[current++] };
        }
        return { done: true, value: null };
      },
    };
  }

  protected getString(value: Tuple): string {
    return value?.text;
  }

  protected toEXT(value: Tuple): string {
    return value?.value;
  }

  protected toINT(value: string): Tuple | undefined {
    return this._options.find((e) => e.value === value);
  }

  protected compare(a: Tuple, b: Tuple): number {
    if (a.value === b.value) {
      return 0;
    }
    return a.value < b.value ? -1 : 1;
  }
}
