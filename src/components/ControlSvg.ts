export default class ControlSvg extends HTMLElement {
  private _root: HTMLElement;

  constructor() {
    super();
    this._root = this;
  }

  static get observedAttributes(): string[] {
    return ["data"];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (name === "data") {
      fetch(newValue)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.text();
        })
        .then((text) => {
          this._root.innerHTML = text;
        })
        .catch(() => {
          this._root.innerHTML = "";
        });
    }
  }
}
