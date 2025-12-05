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

  private parseDate(input: string | Date, locale: string) {
    return input instanceof Date
      ? DateTime.fromJSDate(input).setLocale(locale)
      : DateTime.fromISO(input).setLocale(locale);
  }

  getResource(key: string | null, defaultValue?: string): string | null {
    if (!key) {
      return null;
    }

    const _key = key.startsWith("@@:") ? key.substring(3) : key;
    const _defaultValue = defaultValue !== undefined ? defaultValue : _key;

    const result = this.#resources[_key];

    return result?.length ? result : _defaultValue;
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

  formatCurrency(value: number | null, args?: {
    locale?: string;
    currencyCode?: string;
    digits?: number;
    minDigits?: number;
    maxDigits?: number;
  }): string | null {
    if (value == null) return null;

    try {
      const result = new Intl.NumberFormat(
        args?.locale ?? this.#locale,
        {
          style: !!args?.currencyCode ? "currency" : "decimal",
          currency: args?.currencyCode || undefined,
          minimumFractionDigits: args?.digits ?? args?.minDigits ?? 2,
          maximumFractionDigits: args?.digits ?? args?.maxDigits,
        }
      ).format(value);

      // Normalizar espaços não separáveis
      // return result.replace(/\u00A0/g, " ");

      return result;
    } catch {
      return value.toString();
    }
  }

  formatDate(value: string | Date | null, args?: { locale?: string }): string | null {
    if (!value) return null;

    try {
      const _date = this.parseDate(value, args?.locale ?? this.#locale);
      return _date.toLocaleString({
        year: "2-digit",
        month: "numeric",
        day: "numeric",
      });
    } catch {
      return value.toString();
    }
  }

  formatDateTime(value: string | Date | null, args?: { locale?: string }): string | null {
    if (!value) return null;

    try {
      const _date = this.parseDate(value, args?.locale ?? this.#locale);
      return _date.toLocaleString({
        year: "2-digit",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    } catch {
      return value.toString();
    }
  }

  formatNumber(value: number | null, args?: {
    locale?: string;
    digits?: number;
    minDigits?: number;
    maxDigits?: number;
  }): string | null {
    if (value == null) return null;

    try {
      const result = new Intl.NumberFormat(
        args?.locale ?? this.#locale,
        {
          style: "decimal",
          minimumFractionDigits: args?.digits ?? args?.minDigits ?? 0,
          maximumFractionDigits: args?.digits ?? args?.maxDigits ?? 20,
        }
      ).format(value);

      return result || value.toString();
    } catch {
      return value.toString();
    }
  }

  formatQuantity(value: number | null, args?: {
    locale?: string;
    digits?: number;
    minDigits?: number;
    maxDigits?: number
  }): string | null {
    // Quantidade → sem restrição de casas decimais, usa defaults ou args
    return this.formatNumber(value, args);
  }

  formatTime(value: string | Date | null, args?: { locale?: string }): string | null {
    if (!value) return null;

    try {
      const _date = this.parseDate(value, args?.locale ?? this.#locale);
      return _date.toLocaleString(DateTime.TIME_24_WITH_SECONDS);
    } catch {
      return value.toString();
    }
  }

  formatUnitValue(value: number | null, args?: {
    locale?: string
  }): string | null {
    return this.formatNumber(value, { ...args, minDigits: 2, maxDigits: 8 });
  }

  formatValue(value: number | null, args?: {
    locale?: string
  }): string | null {
    return this.formatNumber(value, { ...args, digits: 2 });
  }

  formatWeight(value: number | null, args?: {
    locale?: string
  }): string | null {
    return this.formatNumber(value, { ...args, minDigits: 3, maxDigits: 6 });
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
