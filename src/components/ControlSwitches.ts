import Tags from "./Tags.js";

/*
 * This component assigns to itself a class named 'ps-color-<n>', where
 * <n> is a hash between 1 and 20 based on its content, or based on the
 * value of the attribute 'expression', if present.
 */
export default class ControlSwitches extends HTMLElement {
  private _root: HTMLElement;

  private _value: string[] = [];

  // private _observer: MutationObserver | null;

  constructor() {
    super();

    this._root = this;
  }

  connectedCallback(): void {
    this._root.querySelectorAll("option").forEach((option) => {
      option.addEventListener("click", () => {
        const tags = Tags.from(this._value.join(","));
        if (option.hasAttribute("checked")) {
          tags.remove(option.getAttribute("value") ?? "");
        } else {
          tags.add(option.getAttribute("value") ?? "");
        }
        this._value = tags.toArray();
        this._refresh();
        this.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: true }),
        );
      });
    });

    this._refresh();
  }

  disconnectedCallback(): void {
    // if (this._observer) {
    //   this._observer.disconnect();
    //   this._observer = null;
    // }
  }

  private _refresh() {
    const tags = Tags.from(this._value.join(","));
    this._root.querySelectorAll("option").forEach((option) => {
      if (tags.contains(option.getAttribute("value") ?? "")) {
        option.setAttribute("checked", "");
      } else {
        option.removeAttribute("checked");
      }
    });
  }

  get value(): string {
    return this._value.join(",");
  }

  set value(value: string) {
    this._value = Tags.from(value).toArray();
    this._refresh();
  }
}
