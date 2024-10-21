export default class ControlCheckBox extends HTMLElement {
  readonly #root: HTMLElement;

  readonly #input: HTMLInputElement;

  #value?: boolean;

  constructor() {
    super();

    this.#root = this;

    this.#input = document.createElement("input");
    this.#input.setAttribute("type", "checkbox");
    this.#input.addEventListener("change", (event: Event) => {
      event.preventDefault();
      event.stopPropagation();

      this.#value = this.#input.checked;

      this.dispatchEvent(
        new Event("change", { bubbles: true, cancelable: false }),
      );
    });

    this.#value = undefined;
  }

  connectedCallback() {
    this.#root.appendChild(this.#input);
  }

  disconnectedCallback() {
    this.#input.remove();
  }

  get value(): boolean | undefined {
    return this.#value;
  }

  set value(value: boolean | undefined) {
    this.#value = value;
    if (value == null) {
      this.#input.checked = false;
      this.#input.indeterminate = true;
    } else {
      this.#input.checked = value;
      this.#input.indeterminate = false;
    }
  }
}
