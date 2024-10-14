export default class ControlSwitch extends HTMLElement {
  private readonly _root: HTMLElement;

  private _value = false;

  private _connected = false;

  constructor() {
    super();

    this._root = this;

    this._root.addEventListener("click", () => {
      this.value = !this.value;

      this.dispatchEvent(
        new Event("change", {
          bubbles: true,
          cancelable: false,
        }),
      );
    });
  }

  connectedCallback(): void {
    if (!this._connected) {
      // // Remove children
      // while (this._root.firstChild) {
      //   this._root.lastChild.remove();
      // }

      this._root.classList.add("ps-switch", "ps-switch--off");

      this._connected = true;
    }
  }

  get value(): boolean {
    return this._value;
  }

  set value(value: boolean) {
    this._value = value;

    if (this._value) {
      this._root.classList.remove("ps-switch--off");
      this._root.classList.add("ps-switch--on");
    } else {
      this._root.classList.remove("ps-switch--on");
      this._root.classList.add("ps-switch--off");
    }
  }
}
