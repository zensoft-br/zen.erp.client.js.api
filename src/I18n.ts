import { DateTime } from "luxon";
import { Client } from "./Client.js";
// import { HttpError } from "./errors";

export class I18n {

  #locale: string;
  #timeZone: string;
  #resources: any;

  constructor(locale: string, timeZone: string, resources: any) {
    this.#locale = locale;
    this.#timeZone = timeZone;
    this.#resources = resources;
  }

  get locale(): string {
    return this.#locale;
  }

  get timeZone(): string {
    return this.#timeZone;
  }

  getResource(key: string | null, defaultValue?: string): string | null {
    if (!key) {
      return null;
    }

    const _key = key.startsWith("@@:") ? key.substring(3) : key;
    const _defaultValue = arguments.length >= 2 ? defaultValue : _key;

    const result = this.#resources[_key];
    
    return result ?? _defaultValue;
  }

  format(key: string, ...args: any): string {
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

  formatCurrency(number: number | null, currencyCode?: string): string | null {
    if (number == null)
      return null;
    try {
      const result = new Intl.NumberFormat(this.#locale, {
        style: "currency",
        currency:
          currencyCode ?? this.getResource("/@system/default/currency") ?? undefined,
      }).format(number);

      // Replace &nbsp; with space
      return result.replace(String.fromCharCode(160), " ");
    } catch {
      return number.toString();
    }
  }

  formatDate(date: string | Date | null): string | null {
    if (!date)
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
      return date.toString();
    }
  }

  formatDateTime(date: string | Date | null): string | null {
    if (!date)
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
      return date.toString();
    }
  }

  formatNumber(number: number | null, args?: any): string | null {
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

  formatQuantity(number: number | null, args?: any): string | null {
    return this.formatNumber(number, args);
  }

  formatTime(time: string | Date | null): string | null {
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
      return time.toString();
    }
  }

  formatUnitValue(number: number | null): string | null {
    return this.formatNumber(number, { minDigits: 2, maxDigits: 8 });
  }

  formatValue(number: number | null): string | null {
    return this.formatNumber(number, { digits: 2 });
  }

  formatWeight(number: number | null): string | null {
    return this.formatNumber(number, { minDigits: 3, maxDigits: 6 });
  }

  localizeNode(node: Node): void {
    // Localize element attribute values
    if (node instanceof HTMLElement) {
      Array.from(node.attributes).forEach((attr) => {
        const tmp = attr.value.replace(/@@:([\\/@\\.\\-\\+\\#\w]+)/g, (_, b) => this.getResource(b) ?? "");
        if (tmp !== attr.value) {
          node.setAttribute(attr.name, tmp);
        }
      });
    }

    // Check it element is a template tag
    const _node = node instanceof HTMLTemplateElement ? node.content : node;

    for (const child of _node.childNodes) {
      if (!child.hasChildNodes() && child.textContent) {
        const tmp = child.textContent.replace(/@@:([\\/@\\.\\-\\+\\#\w]+)/g, (_, b) => this.getResource(b) ?? "");
        if (tmp !== child.textContent) {
          child.textContent = tmp;
        }
      }

      if (_node.hasChildNodes()) {
        this.localizeNode(child);
      }
    }
  }

  observeNode(node: Node): void {
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

  parseLocalizedResource(o: any): string {
    if (Array.isArray(o)) {
      return o.map((e) => this.parseLocalizedResource(e)).join("\n");
    }

    if (typeof o === 'object' && o !== null) {
      if (o.type === "localizedResource") {
        const args: string[] = [];
        if (Array.isArray(o.args)) {
          for (const arg of o.args) {
            args.push(this.parseLocalizedResource(arg));
          }
        }
        return this.format(o.key, ...args);
      }

      return JSON.stringify(o);
    }

    return String(o);
  }
}

export async function createI18n(zenClient: Client): Promise<I18n> {
  const resources = await zenClient.web.fetchJson("/system/resources");

  return new I18n(zenClient.language, zenClient.timeZone, resources);
}
