// TODO multiple (UX) (checkbox on selection)
// TODO __options above or below depending on space available
// TODO __options float over all elements (even when parent does not overflow)
// TODO html items (getString)
// TODO não está encontrando quando pesquisa pela string ". Testar * tb
// TODO erro ao pesquisar '
// TODO hide options on scroll outside
// TODO ao clicar em um "value" ou em qq elemento filho do controle, o foco deveria cair no input
// TODO unique (não permite valores repetidos)
// TODO Ao pesquisar por um texto sem correspondencia, está mostrando/escondendo o
// painel __options rapidamente
// TODO Attributes: ['disabled', 'required'];
// TODO pageup/pagedown não funciona
// TODO atributo [disabled] - desabilitar o controle

import _debounce from "lodash.debounce";
import StringUtils from "./StringUtils.js";
import ControlHideAndSeek from "./ControlHideAndSeek.js";

// INT - Internal type, EXT - External type
export default abstract class ControlSelectAbstract<
  INT,
  EXT,
> extends HTMLElement {
  private readonly _root: HTMLElement;

  // Container for __toggler, __values and __input
  private __core: HTMLDivElement;

  private __toggler: HTMLDivElement;

  private __values: HTMLDivElement;

  private __input: HTMLInputElement;

  // Container for __ul
  private __options: HTMLDivElement;

  private __ul: HTMLUListElement;

  private _connected = false;

  private _closed = true;

  private _loading = false;

  private _text = "";

  private _textValues: string[] = [];

  private _iterator?: AsyncIterator<INT>;

  private _values: INT[] = [];

  constructor() {
    super();

    this._root = this;
  }

  static get observedAttributes(): string[] {
    return [];
  }

  connectedCallback(): void {
    // Remove children
    while (this._root.lastChild) {
      this._root.lastChild.remove();
    }

    this._root.classList.add("ps-select");

    // Container for _input and _toggler
    this.__core = this._root.appendChild(document.createElement("div"));
    this.__core.classList.add("ps-select__core");

    this.__toggler = this.__core.appendChild(document.createElement("div"));
    this.__toggler.classList.add("ps-select__toggler");
    this.__toggler.classList.add("closed");
    this.__toggler.addEventListener("click", () => {
      // Disabled
      if (this.hasAttribute("disabled")) {
        return;
      }

      this.toggle();
    });

    this.__values = this.__core.appendChild(document.createElement("div"));
    this.__values.classList.add("ps-select__values");

    this.__input = this.__values.appendChild(document.createElement("input"));
    this.__input.classList.add("ps-select__input");
    this.__input.addEventListener("change", (e) => {
      // Change events will be handled by _root, so _input must not bubble
      e.stopPropagation();
    });

    // Debouncing to reduce number of requests
    // https://css-tricks.com/the-difference-between-throttling-and-debouncing/
    const _bottleneck = _debounce(() => {
      this.open();
    }, 375);
    this.__input.addEventListener("input", (e) => {
      // Disabled
      if (this.hasAttribute("disabled")) {
        e.preventDefault();
        return;
      }

      this._text = this.__input.value || "";
      _bottleneck();
    });

    // Container for <ul> and <more>
    this.__options = this._root.appendChild(document.createElement("div"));
    this.__options.classList.add("ps-select__options");
    this.__options.classList.add("closed");
    this.__options.tabIndex = -1;

    /*
     * UX
     */

    // Click outside
    document.addEventListener("click", (e) => {
      if (!this._root.contains(<Node>e.target)) {
        if (!this._closed) {
          this.close();
        }
        this.__input.value = "";
        this._text = "";
      }
    });

    // Focus outside
    document.addEventListener("focusin", (e) => {
      if (!this._root.contains(<Node>e.target)) {
        if (!this._closed) {
          this.close();
        }
        this.__input.value = "";
        this._text = "";
      }
    });

    // Scroll outside TODO not working
    this._root.addEventListener("scroll", (e) => {
      if (!this._root.contains(<Node>e.target)) {
        if (!this._closed) {
          this.close();
        }
        this.__input.value = "";
        this._text = "";
      }
    });

    // Toggle options panel on _root Alt+ArrowDown or Alt+ArrowUp
    this._root.addEventListener("keydown", (e) => {
      // Disabled
      if (this.hasAttribute("disabled")) {
        return;
      }

      if (
        e.altKey
        && !e.ctrlKey
        && !e.metaKey
        && !e.shiftKey
        && (e.key === "ArrowDown" || e.key === "ArrowUp")
      ) {
        e.preventDefault();
        this.toggle();
      }
    });

    this.__input.addEventListener("keydown", (e) => {
      // Disabled
      if (this.hasAttribute("disabled")) {
        return;
      }

      // Focus on options panel on _input ArrowDown
      if (
        !e.altKey
        && !e.ctrlKey
        && !e.metaKey
        && !e.shiftKey
        && e.key === "ArrowDown"
        && !this._closed
      ) {
        e.preventDefault();
        this._focusOptions();
      }

      // Remove last value on _input Backspace
      if (
        !e.altKey
        && !e.ctrlKey
        && !e.metaKey
        && !e.shiftKey
        && e.key === "Backspace"
        && this._text === ""
      ) {
        //
        if (this.values.length) {
          // This block is not working, dont know why
          // Replaced with the next block
          // const temp = [...this.values];
          // temp.splice(temp.length - 1, 1);
          // this.values = temp;

          const _values = [...this._values];
          _values.splice(_values.length - 1, 1);
          this._setValues(_values);
        }
      }
    });

    this.__input.addEventListener("keypress", (e) => {
      // Disabled
      if (this.hasAttribute("disabled")) {
        return;
      }

      // Enter - Select first item
      if (
        !e.altKey
        && !e.ctrlKey
        && !e.metaKey
        && !e.shiftKey
        && e.key === "Enter"
        && !this._closed
      ) {
        e.preventDefault();
        const li = this.__ul.querySelector("li");
        if (li) {
          li.click();
        }
      }
    });

    this._connected = true;
  }

  protected get root(): HTMLElement {
    return this._root;
  }

  protected get connected(): boolean {
    return this._connected;
  }

  get value(): EXT | EXT[] | null {
    if (this.hasAttribute("multiple")) {
      return this.values;
    }
    return !this.values.length ? null : this.values[0];
  }

  set value(value: EXT | EXT[]) {
    if (this.hasAttribute("multiple")) {
      this.values = <EXT[]>value;
    } else {
      const tmp = <EXT>value;
      this.values = tmp ? [tmp] : [];
    }
  }

  get values(): EXT[] {
    return this._values.map((o) => this.toEXT(o));
  }

  set values(values: EXT[]) {
    if (values == null || values.length === 0) {
      this._values = [];
    } else {
      // Remove duplicates
      const _values: INT[] = [];
      values.forEach((external) => {
        const internal = this.toINT(external)!;
        if (!_values.find((e) => this.compare(e, internal) === 0)) {
          _values.push(internal);
        }
      });
      this._values = _values;
    }
    // else this._values = values.map((o) => this.toINT(o));

    if (!this.hasAttribute("multiple") && this._values.length > 1) {
      this._values = [this._values[0]];
    }

    // Clear the input value
    this.__input.value = "";

    // Remove actual value elements
    this.__values
      .querySelectorAll(".ps-select__value")
      .forEach((e) => e.remove());

    // Create 1 element for each value
    this._textValues = [];
    for (let i = 0; i < this._values.length; i++) {
      const text = this.getString(this._values[i]) ?? "";

      this._textValues.push(text);

      const hash = (StringUtils.hash(text) % 20) + 1;

      const div = this.__values.insertBefore(
        document.createElement("div"),
        this.__input,
      );
      div.classList.add("ps-select__value");
      div.classList.add(`ps-color-${hash}`, `color-${hash}`);
      div.textContent = text;

      // Remove button
      const button = div.appendChild(document.createElement("div"));
      button.classList.add("ps-select__deleteValue");
      button.addEventListener("click", () => {
        // Disabled
        if (this.hasAttribute("disabled")) {
          return;
        }

        const _values = [...this._values];
        _values.splice(i, 1);
        this._setValues(_values);
      });
    }
  }

  // Dispatch a change event when the value is changed by an user action
  private _setValues(values: INT[]): void {
    if (!values) {
      this.values = [];
    } else {
      this.values = values.map((o) => this.toEXT(o));
    }

    this.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false }),
    );
  }

  // Focus on <ul> and mark selected <li>
  private _focusOptions() {
    const ul = this.__ul;
    ul.focus();
    (<any>ul).__select(
      <HTMLLIElement>(<any>ul).__selected
      || ul.querySelector("li.selected")
      || ul.querySelector("li"),
    );
  }

  disconnectedCallback(): void {
    this._connected = false;
  }

  protected async open(): Promise<void> {
    this.__toggler.classList.remove("closed");
    this.__options.classList.remove("closed");
    this.__options.style.width = `${this._root.offsetWidth}`;
    this._closed = false;

    setTimeout(() => {
      if (this.__options.getBoundingClientRect().bottom > window.innerHeight) {
        this.__options.classList.add("up");
      } else {
        this.__options.classList.remove("up");
      }
    }, 0);

    await this.refreshOptions();
  }

  protected close(): void {
    this.__toggler.classList.add("closed");
    this.__options.classList.add("closed");
    const ul = this.__options.querySelector("ul");
    if (ul) {
      ul.remove();
    }
    this._iterator = undefined;
    this._closed = true;
  }

  protected toggle(): void {
    if (this._closed) {
      (async () => {
        await this.open();
        this._focusOptions();
      })();
    } else {
      this.close();
      this.__input.focus();
    }
  }

  protected async refreshOptions(): Promise<void> {
    this._iterator = this.getIterator(this._text);

    // Create a new <ul> to avoid conflicts
    const ul = document.createElement("ul");
    ul.tabIndex = -1;

    const more = ul.appendChild(document.createElement("button"));
    more.tabIndex = -1;
    more.textContent = "more";
    more.addEventListener("click", () => this.fetch());
    ControlHideAndSeek.whenVisible(more).then(() => {
      this.fetch();
    });

    // Function to mark <li> as selected
    (<any>ul).__select = (li: Element) => {
      if (!li || !(li instanceof HTMLLIElement)) {
        return;
      }

      // Mark previous selected <li> as not selected
      const selected = <HTMLLIElement>(<any>ul).__selected;
      if (selected) {
        selected.classList.remove("selected");
      }

      // Mark current <li> as selected
      li.classList.add("selected");
      li.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });

      (<any>ul).__selected = li;
    };

    // Make <ul> navigable
    ul.addEventListener("keydown", (e: KeyboardEvent) => {
      const selectLi = (<any>ul).__select;

      const selected = <HTMLLIElement>(<any>ul).__selected
        || ul.querySelector("li.selected")
        || ul.querySelector("li");

      // https://keycode.info
      let proc = false;
      if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
        proc = true;
        if (e.key === "ArrowDown") {
          selectLi(selected.nextElementSibling);
        } else if (e.key === "ArrowUp") {
          selectLi(selected.previousElementSibling);
        } else if (e.key === "PageDown") {
          for (let i = 0; i < 10; i++) {
            selectLi(selected.nextElementSibling);
          }
        } else if (e.key === "PageUp") {
          for (let i = 0; i < 10; i++) {
            selectLi(selected.previousElementSibling);
          }
        } else if (e.key === "Enter") {
          selected.click();
        } else if (e.key === "Escape") {
          this.close();
          this.__input.focus();
        } else {
          proc = false;
        }
      }

      if (proc) {
        e.preventDefault();
        e.stopPropagation();
      }
    });

    // Remove previous <ul>
    if (this.__ul) {
      this.__ul.remove();
    }

    // Append new <ul>
    this.__ul = ul;
    this.__options.appendChild(ul);

    // Fetch
    await this.fetch();
  }

  async fetch(fetchSize?: number): Promise<void> {
    const ul = this.__ul;

    const _fetchSize = fetchSize || 25;

    if (this._loading) {
      return;
    }

    this._loading = true;
    try {
      // Remove more button
      const more = ul.querySelector("button");
      if (more) {
        more.remove();
      }

      let done = false;
      for (let index = 0; index < _fetchSize; index++) {
        // TODO Em alguns casos o iterator chegou null aqui (ao segurar uma tecla apertada)
        const next = await this._iterator!.next();
        if (next.done) {
          done = true;
          break;
        }

        const li = ul.appendChild(document.createElement("li"));
        li.innerHTML = this._highlight(this.getString(next.value) ?? "", this._text);

        // Set value on click
        li.addEventListener("click", () => {
          if (this.hasAttribute("multiple")) {
            this._setValues([...this._values, next.value]);
          } else {
            this._setValues([next.value]);
          }

          this.close();
          this.__input.focus();
        });
      }

      // Reinsert more button if needed
      if (!done && more) {
        ul.appendChild(more);
        ControlHideAndSeek.whenVisible(more).then(() => {
          this.fetch();
        });
      }
    } finally {
      this._loading = false;
    }

    // // Close when no elements found
    // if (done && ul.childElementCount === 0) {
    //   this.close();
    // }
  }

  public focus(): void {
    this.__input.focus();
  }

  public textValues(): string[] {
    return this._textValues;
  }

  private _highlight(s: string, pattern: string): string {
    return s;

    // // replace occurences of value (case insensitive)
    // let _s = s;

    // // Null or empty string
    // if (!pattern) {
    //   return _s;
    // }

    // // Ignore html
    // if (_s.trim().startsWith("<")) {
    //   return _s;
    // }

    // const index = [];
    // const substr = [];
    // const regexp = new RegExp(pattern, "gi");
    // for (; ;) {
    //   const matcher = regexp.exec(_s);
    //   if (!matcher) {
    //     break;
    //   }
    //   index.push(matcher.index);
    //   substr.push(matcher[0]);
    // }
    // for (let i = index.length - 1; i > -1; i--) {
    //   _s = `${_s.substr(0, index[i])}<mark>${substr[i]}</mark>${_s.substr(
    //     index[i] + substr[i].length,
    //   )}`;
    // }

    // return _s;
  }

  // Must return an AsyncIterator of T, filtered according to the input text
  protected abstract getIterator(text: string): AsyncIterator<INT>;

  // Must return a string representation of T
  protected abstract getString(value: INT): string | null;

  protected abstract toEXT(value: INT): EXT;

  protected abstract toINT(value: EXT): INT | undefined;

  protected abstract compare(a: INT, b: INT): number;
}
