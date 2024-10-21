export default class ControlDatetime extends HTMLElement {
  private readonly _root: HTMLElement;

  private readonly _inputDate: HTMLInputElement;

  private readonly _inputTime: HTMLInputElement;

  private _value?: Date;

  constructor() {
    super();

    this._root = this;

    const eventListener: EventListener = (event: Event) => {
      event.stopPropagation();

      if (event.target === this._inputDate && this._inputDate.value !== "" && this._inputTime.value === "") {
        this._inputTime.value = new Date().toLocaleTimeString();
      }

      let dispath = false;

      // both empty
      if (this._inputDate.value === "" && this._inputTime.value === "") {
        this._value = undefined;
        dispath = true;
      }
      // both filled
      else if (this._inputDate.value !== "" && this._inputTime.value !== "") {
        this._value = new Date(`${this._inputDate.value}T${this._inputTime.value}`);
        dispath = true;
      }

      if (dispath) {
        this.dispatchEvent(
          new Event("change", { bubbles: true, cancelable: false }),
        );
      }
    };

    this._inputDate = document.createElement("input");
    this._inputDate.setAttribute("type", "date");
    this._inputDate.addEventListener("change", eventListener);

    this._inputTime = document.createElement("input");
    this._inputTime.setAttribute("type", "time");
    this._inputTime.setAttribute("step", "1");
    this._inputTime.addEventListener("change", eventListener);

    this._value = undefined;
  }

  connectedCallback() {
    this._root.appendChild(this._inputDate);

    this._root.appendChild(this._inputTime);
  }

  disconnectedCallback() {
    this._inputDate.remove();
    this._inputTime.remove();
  }

  get value(): Date | undefined {
    return this._value;
  }

  set value(value: Date | undefined) {
    if (!value) {
      this._inputDate.value = "";
      this._inputTime.value = "";
    } else {
      let date;
      if (value instanceof Date) {
        date = value;
      } else {
        date = new Date(value);
      }
      this._value = date;
      this._inputDate.value = date.toISOString().substring(0, 10);
      this._inputTime.value = date.toLocaleTimeString();
    }
  }
}
