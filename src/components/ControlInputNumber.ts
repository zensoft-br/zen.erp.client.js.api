export default class ControlInputNumber extends HTMLElement {
  private readonly _decimalSeparator: string;

  private readonly _root: HTMLElement;

  private readonly _input: HTMLInputElement;

  private _value: any = null;

  private _focus: boolean = false;

  constructor() {
    super();

    this._decimalSeparator = parseFloat("1234.5")
      .toLocaleString(navigator.language)
      .replace(/.*4(.*)5.*/, "$1");

    this._root = this;
    this._input = document.createElement("input");
    this._input.style.width = "100%";
    this._input.style.height = "100%";
    this._input.addEventListener("change", (e) => {
      e.stopPropagation();

      this.value = this._input.value;

      this.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: false }),
      );
    });

    this._input.addEventListener("focus", (e) => {
      this._focus = true;
      this._input.value = this._value != null
        ? this._value.toLocaleString(navigator.language, {
          useGrouping: false,
          maximumFractionDigits: 10,
        })
        : "";
    });

    this._input.addEventListener("blur", (e) => {
      this._focus = false;
      this._input.value = this._value != null
        ? this._value.toLocaleString(navigator.language, {
          useGrouping: true,
          maximumFractionDigits: 10,
        })
        : "";
    });
  }

  connectedCallback() {
    while (this._root.lastChild) {
      this._root.lastChild.remove();
    }

    this._root.appendChild(this._input);
  }

  static get observedAttributes(): string[] {
    return ["disabled", "placeholder", "readonly"];
  }

  attributeChangedCallback(name: string): void {
    this._input.setAttribute(name, this._root.getAttribute(name) ?? "");
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    if (value == null) {
      this._value = null;
    } else if (typeof value === "string" || value instanceof String) {
      if (value === "") {
        this._value = null;
      } else {
        let tmp = Number(value.replace(/[.,](?=.*[.,])/g, "").replaceAll(",", "."));
        if (Number.isNaN(tmp)) {
          try {
            tmp = Number(Function(`return ${value.replaceAll(",", ".")}`)());
          } catch (_) {
            //
          }
        }
        if (!Number.isNaN(tmp)) {
          this._value = Math.round(tmp * (10 ** 8)) / 10 ** 8;
        } else {
          this._value = null;
        }
      }
    } else if (typeof value === "number" || value instanceof Number) {
      this._value = value;
    } else {
      this._value = null;
    }

    if (this._value == null) {
      this._input.value = "";
    } else {
      this._input.value = this._value.toLocaleString(navigator.language, {
        useGrouping: !this._focus,
        maximumFractionDigits: 10,
      });
    }
  }
}
