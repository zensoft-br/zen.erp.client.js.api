import StringUtils from "./StringUtils.js";

export default class ControlTags extends HTMLElement {
  private readonly _root: HTMLElement;

  private readonly _input: HTMLInputElement;

  private _value: string[] = [];

  constructor() {
    super();

    this._root = this;

    this._input = document.createElement("input");
    this._input.type = "text";
    this._input.addEventListener("change", (event) => {
      event.stopPropagation();
    });
    this._input.addEventListener("focusout", () => {
      this.inputToTag();
    });
    this._input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        this.inputToTag();
      } else if (event.key === "Backspace") {
        if (this._input.value === "" && this._value.length > 0) {
          this._value.pop();
          this.update();
        }
      }
    });
    this._input.addEventListener("input", () => {
      const v = this._input.value;
      if (v.length > 1 && (v.endsWith(" ") || v.endsWith(","))) {
        this.inputToTag();
      }
    });
  }

  connectedCallback(): void {
    this._root.appendChild(this._input);
    this.update();
  }

  static get observedAttributes(): string[] {
    return ["disabled", "placeholder"];
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
  ): void {
    if (oldValue !== newValue) {
      if (name === "placeholder") {
        this._input.setAttribute(name, newValue);
      } else if (name === "disabled") {
        this.setDisabled(this._input, newValue);
      }
    }
  }

  get value(): string {
    return this._value.join(",");
  }

  set value(value: string) {
    const tags: string[] = (value || "")
      .trim()
      .split(",")
      .map((o) => o.trim())
      .filter((o) => o !== "");
    this._value = tags;
    this.update();
  }

  private setDisabled(el: HTMLElement, v: string) {
    el.setAttribute("disabled", v);
    el.childNodes.forEach((el1) => {
      if (el1 instanceof HTMLElement) {
        this.setDisabled(<HTMLElement>el1, v);
      }
    });
  }

  private inputToTag() {
    const tag = this._input.value.trim().replace(",", "");
    this._input.value = "";
    if (tag && this._value.indexOf(tag) === -1) {
      this._value.push(tag);
      this.update();
      this.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: true }),
      );
    }
  }

  private createTag(tag: string): HTMLElement {
    const span = document.createElement("span");

    // Calcula um hash da tag entre 1 e 20, para colorir as tags
    const hash = (StringUtils.hash(tag) % 20) + 1;
    span.classList.add(`ps-color-${hash}`, `c-${hash}`);

    span.innerText = tag;
    span.onclick = () => {
      this._value.splice(this._value.indexOf(tag), 1);
      this.update();
      this.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: true }),
      );
    };

    return span;
  }

  private update() {
    this._root.querySelectorAll("span").forEach((e) => e.remove());
    for (const tag of this._value) {
      if (tag) {
        this._input.before(this.createTag(tag));
      }
    }
  }
}
