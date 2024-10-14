import Tags from "./Tags.js";
import StringUtils from "./StringUtils.js";

export default class ControlTagsView extends HTMLElement {
  private readonly _root: HTMLElement;

  private _observer: MutationObserver | undefined;

  private _value: string[] = [];

  constructor() {
    super();

    this._root = this;
  }

  connectedCallback(): void {
    if (this._root.textContent) {
      this._value = Tags.from(this._root.textContent).toArray();
    }

    this.update();

    this._observer = new MutationObserver((mutations) => {
      // Just respond to changes on textContent
      if (
        mutations.length === 1
        && mutations[0].addedNodes.length === 1
        && mutations[0].addedNodes[0].nodeType === 3
      ) {
        this._value = Tags.from(this._root.textContent).toArray();
        this.update();
      }
    });

    this._observer.observe(this, {
      childList: true,
    });
  }

  disconnectedCallback(): void {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = undefined;
    }
  }

  get value(): string {
    return this._value.join(",");
  }

  private createTag(tag: string): HTMLElement {
    const span = document.createElement("span");

    // Calcula um hash da tag entre 1 e 20, para colorir as tags
    const hash = (StringUtils.hash(tag) % 20) + 1;
    span.classList.add(`ps-color-${hash}`, `c-${hash}`);

    span.innerText = tag;

    return span;
  }

  private update() {
    this._root.textContent = "";
    for (const tag of this._value) {
      if (tag) {
        this._root.appendChild(this.createTag(tag));
      }
    }
  }
}
