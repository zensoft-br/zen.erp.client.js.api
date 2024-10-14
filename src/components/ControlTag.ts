import StringUtils from "./StringUtils.js";

/*
 * This component assigns to itself a class named 'ps-color-<n>', where
 * <n> is a hash between 1 and 20 based on its content, or based on the
 * value of the attribute 'expression', if present.
 */
export default class ControlTag extends HTMLElement {
  private _root: HTMLElement;

  private _observer: MutationObserver | undefined;

  constructor() {
    super();

    this._root = this;
  }

  static get observedAttributes(): string[] {
    return ["expression"];
  }

  attributeChangedCallback(name: string): void {
    if (name === "expression") {
      this.refresh();
    }
  }

  connectedCallback(): void {
    this._observer = new MutationObserver((mutations) => {
      mutations.forEach(() => {
        this.refresh();
      });
    });

    this._observer.observe(this, {
      childList: true,
    });

    this.refresh();
  }

  disconnectedCallback(): void {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = undefined;
    }
  }

  private refresh() {
    const expression = this.getAttribute("expression") || (this._root.textContent ?? "");
    const hash = (StringUtils.hash(expression) % 20) + 1;
    this._root.classList.forEach((c) => {
      if (c.startsWith("ps-color-") || c.startsWith("c-")) {
        this._root.classList.remove(c);
      }
    });
    this._root.classList.add(`ps-color-${hash}`, `c-${hash}`);
  }
}
