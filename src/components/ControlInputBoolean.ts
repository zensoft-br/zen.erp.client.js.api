class ControlInputBoolean extends HTMLElement {
  private readonly _decimalSeparator: string;

  private readonly _root: HTMLElement;

  private readonly _input: HTMLInputElement;

  private _value: any = null;

  constructor() {
    super();

    this._decimalSeparator = parseFloat("1234.5")
      .toLocaleString(navigator.language)
      .replace(/.*4(.*)5.*/, "$1");

    this._root = this;
    this._input = document.createElement("input");
    this._input.addEventListener("change", (e) => {
      e.stopPropagation();

      this.value = this._input.value;

      this.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: false }),
      );
    });
  }

  connectedCallback() {
    while (this._root.lastChild) {
      this._root.lastChild.remove();
    }

    this._root.appendChild(this._input);
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    let s: string;
    if (!value) {
      s = "";
      this._value = null;
    } else if (typeof value === "string" || value instanceof String) {
      if (value === "") {
        s = "";
        this._value = null;
      } else {
        const tmp = Number(value.replaceAll(this._decimalSeparator, "."));
        if (!isNaN(tmp)) {
          s = String(tmp).replaceAll(".", this._decimalSeparator);
          this._value = tmp;
        } else {
          s = "";
          this._value = null;
        }
      }
    } else if (typeof value === "number" || value instanceof Number) {
      s = String(value).replaceAll(".", this._decimalSeparator);
      this._value = value;
    }

    this._input.value = s;
  }
}
