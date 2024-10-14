// https://medium.com/patternfly-elements/web-components-the-constructor-and-patternfly-elements-606bc51938c9
// https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance
// https://developers.google.com/web/fundamentals/web-components/customelements
// https://developers.google.com/web/fundamentals/web-components/shadowdom
// https://developers.google.com/web/fundamentals/web-components/best-practices
// https://css-tricks.com/creating-a-custom-element-from-scratch/

export default class ControlTemplate extends HTMLElement {
  // private readonly _root: ShadowRoot;
  private readonly _root: HTMLElement;

  private _value = false;

  constructor() {
    super();

    // this._root = this.attachShadow({ mode: 'closed' }).getRootNode();
    this._root = this;

    // attributes and children must not be assigned in the constructor
    // https://html.spec.whatwg.org/multipage/custom-elements.html#custom-element-conformance
  }

  get value(): boolean {
    return this._value;
  }

  set value(value: boolean) {
    this._value = value;
  }
}
