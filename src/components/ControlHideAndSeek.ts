/* eslint-disable no-new-func */
export default class ControlHideAndSeek extends HTMLElement {
  private _lastVisible = false;

  private _listener: any;

  connectedCallback(): void {
    this._lastVisible = false;
    if (this.parentElement) {
      this.parentElement.addEventListener(
        "scroll",
        (this._listener = () => {
          this.check();
        }),
      );
    }

    this.check();
  }

  disconnectedCallback(): void {
    if (this.parentElement) {
      this.parentElement.removeEventListener("scroll", this._listener);
    }
  }

  static isVisible(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight,
    );
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  check(): void {
    const visible = ControlHideAndSeek.isVisible(this);

    if (visible && !this._lastVisible) {
      this._lastVisible = true;
      if (this.hasAttribute("onshow")) {
        new Function(this.getAttribute("onshow") ?? "")();
      }
    }
    if (!visible && this._lastVisible) {
      this._lastVisible = false;
      if (this.hasAttribute("onhide")) {
        new Function(this.getAttribute("onhide") ?? "")();
      }
    }
  }

  public static whenVisible(element: HTMLElement): Promise<void> {
    const { parentElement } = element;
    return new Promise((resolve) => {
      // Listener is being called more than once in "scroll" event
      let done = false;
      const listener = () => {
        if (!done && ControlHideAndSeek.isVisible(element)) {
          done = true;
          // TODO ! not null assertion
          parentElement!.removeEventListener("scroll", listener);
          resolve();
        }
      };
      // TODO ! not null assertion
      parentElement!.addEventListener("scroll", listener);
    });
  }
}
