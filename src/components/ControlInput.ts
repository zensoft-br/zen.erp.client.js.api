import StringUtils from "./StringUtils.js";

export default class ControlInput extends HTMLElement {
  private _hash = 0;

  connectedCallback(): void {
    this.contentEditable = this.getAttribute("contenteditable") ?? "true";
    this.tabIndex = Number(this.getAttribute("tabindex") ?? "0");

    this._hash = StringUtils.hash(this.innerHTML);

    // // dispatch 'change' on Enter
    // this.addEventListener('keydown', (e) => {
    //   if (e.key === 'Enter') {
    //     if (this._textContent !== this.textContent) {
    //       this._textContent = this.textContent;
    //       this.dispatchEvent(new Event('change'));
    //     }
    //   }
    // });

    // dispatch 'change' on focusout
    this.addEventListener("focusout", () => {
      this.dispatchIfChanged();
    });
  }

  public dispatchIfChanged(): void {
    const hash = StringUtils.hash(this.innerHTML);
    if (this._hash !== hash) {
      this._hash = hash;
      this.dispatchEvent(new Event("change"));
    }
  }

  set innerHTML(value: string) {
    super.innerHTML = value;
    this._hash = StringUtils.hash(this.innerHTML);
  }

  get innerHTML(): string {
    return super.innerHTML;
  }

  get value(): string {
    return htmlToTxt(this.innerHTML);
  }

  set value(value: string) {
    this.innerHTML = txtToHtml(value);
    this._hash = StringUtils.hash(this.innerHTML);
  }
}

function htmlToTxt(value: string): string {
  return (value ?? "")
    .replace(/<br>/g, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

function txtToHtml(value: string): string {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\r\n/g, "<br>")
    .replace(/\n/g, "<br>");
}
