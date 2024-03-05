import { DateTime } from "luxon";
// import { HttpError } from "./errors";

export class I18n {

  #locale;
  #timeZone;
  #resources;

  constructor(locale, timeZone, resources) {
    this.#locale = locale;
    this.#timeZone = timeZone;
    this.#resources = resources;
  }

  get locale() {
    return this.#locale;
  }

  get timeZone() {
    return this.#timeZone;
  }

  /**
   *
   * @param {string} key
   * @param {string} defaultValue
   * @returns
   */
  getResource(key, defaultValue?) {
    if (!key) {
      return null;
    }

    const _key = key.startsWith("@@:") ? key.substring(3) : key;
    const _defaultValue = defaultValue ?? _key;

    const result = this.#resources[_key];
    if (!result) {
      return _defaultValue;
    }
    return result;
  }

  /**
   *
   * @param {string} key
   * @param  {...any} args
   * @returns string
   */
  format(key, ...args) {
    const format = this.getResource(key);

    if (!format)
      return "";

    const touched: boolean[] = [];
    const result = format.replace(/\{(\d+)\}/g, (m, n) => {
      touched[n] = true;
      if (n < args.length)
        return args[n];
      return m;
    });
    const extra: any[] = [];
    for (let index = 0; index < args.length; index++) {
      if (!touched[index])
        extra.push(args[index]);
    }

    return result + (extra.length ? ` [${extra.join(", ")}]` : "");
  }

  /**
   *
   * @param {number} number
   * @param {string} currencyCode
   * @returns string
   */
  formatCurrency(number, currencyCode = null) {
    if (number == null)
      return null;
    try {
      const result = new Intl.NumberFormat(this.#locale, {
        style: "currency",
        currency:
          currencyCode ?? this.getResource("/@system/default/currency"),
      }).format(number);

      // Replace &nbsp; with space
      return result.replace(String.fromCharCode(160), " ");
    } catch {
      return number.toString();
    }
  }

  /**
   * @param {string | Date} date
   * @returns string
   */
  formatDate(date) {
    if (date == null)
      return null;

    try {
      let _date;
      if (date instanceof Date) {
        _date = DateTime.fromJSDate(date).setLocale(this.#locale);
      } else {
        _date = DateTime.fromISO(date).setLocale(this.#locale);
      }
      return _date.startOf("day").toLocaleString({
        year: "2-digit", month: "numeric", day: "numeric",
      });
    } catch (error) {
      return date;
    }
  }

  /**
   *
   * @param {string | Date} date
   * @returns
   */
  formatDateTime(date) {
    if (date == null)
      return null;

    try {
      let _date;
      if (date instanceof Date) {
        _date = DateTime.fromJSDate(date).setLocale(this.#locale);
      } else {
        _date = DateTime.fromISO(date).setLocale(this.#locale);
      }

      return _date.toLocaleString({
        year: "2-digit", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric",
      });
    } catch {
      return date;
    }
  }

  /**
   *
   * @param {number} number
   * @param {any} args
   * @returns string
   */
  formatNumber(number, args) {
    if (number == null)
      return null;

    try {
      const result = new Intl.NumberFormat(args?.locale ?? this.#locale, {
        style: "decimal",
        minimumFractionDigits: args?.digits ?? args?.minDigits ?? 0,
        maximumFractionDigits: args?.digits ?? args?.maxDigits ?? 20,
      }).format(number);

      return result || number.toString();
    } catch {
      return number.toString();
    }
  }

  /**
   *
   * @param {number} number
   * @returns string
   */
  formatQuantity(number, args) {
    return this.formatNumber(number, args);
  }

  /**
   *
   * @param {string} time
   * @returns  string
   */
  formatTime(time) {
    if (time == null)
      return null;

    try {
      let _date;
      if (time instanceof Date) {
        _date = DateTime.fromJSDate(time).setLocale(this.#locale);
      } else {
        _date = DateTime.fromISO(time).setLocale(this.#locale);
      }

      return _date.toLocaleString(DateTime.TIME_24_WITH_SECONDS);
    } catch {
      return time;
    }
  }

  /**
   *
   * @param {number} number
   * @returns string
   */
  formatUnitValue(number) {
    return this.formatNumber(number, { minDigits: 2, maxDigits: 8 });
  }

  /**
   *
   * @param {number} number
   * @returns string
   */
  formatValue(number) {
    return this.formatNumber(number, { digits: 2 });
  }

  /**
   *
   * @param {number} number
   * @returns string
   */
  formatWeight(number) {
    return this.formatNumber(number, { minDigits: 3, maxDigits: 6 });
  }

  /**
   *
   * @param {Node} node
   */
  localizeNode(node) {
    // Localize element attribute values
    if (node instanceof HTMLElement) {
      Array.from(node.attributes).forEach((attr) => {
        const tmp = attr.value.replace(/@@:([\\/@\\.\\-\\+\\#\w]+)/g, (_, b) => this.getResource(b));
        if (tmp !== attr.value) {
          node.setAttribute(attr.name, tmp);
        }
      });
    }

    // Check it element is a template tag
    const _node = node instanceof HTMLTemplateElement ? node.content : node;

    for (const child of _node.childNodes) {
      if (!child.hasChildNodes() && child.textContent) {
        const tmp = child.textContent.replace(/@@:([\\/@\\.\\-\\+\\#\w]+)/g, (_, b) => this.getResource(b));
        if (tmp !== child.textContent) {
          child.textContent = tmp;
        }
      }

      if (_node.hasChildNodes()) {
        this.localizeNode(child);
      }
    }
  }

  /**
   *
   * @param {Node} node
   */
  observeNode(node) {
    this.localizeNode(node);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          for (const _node of mutation.addedNodes) {
            this.localizeNode(_node);
          }
        }
      });
    });
    observer.observe(node, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
}

export async function createI18n(zenClient) {
  const resources = await zenClient.web.fetchJson("/system/resources");

  return new I18n(zenClient.language, zenClient.timeZone, resources);
}
