import { I18n, createI18n } from "./I18n.js";
import Web from "./Web.js";

export class Client {

  #host: string;
  #tenant: string;
  #token: string;
  #jwt: any;
  #debug = false;

  #i18n: Promise<I18n> | undefined;
  #web: Web | undefined;

  constructor(tenant: string, token: string, properties?: any) {
    this.#host = properties?.host ?? "https://api.zenerp.app.br";
    this.#tenant = tenant;
    this.#token = token;
    this.#jwt = jwt(token);
  }

  async close() {
    const response = await this.fetch("/auth/logout", {
      method: "POST",
    });
    if (!response.ok) {

    }
  }

  async fetch(input: string | URL | globalThis.Request, init?: RequestInit): Promise<Response> {
    const url = input instanceof Request
      ? new URL(input.url, this.#host)
      : new URL(input.toString(), this.#host);

    // shallow copy
    const _init = { ...init };

    const authorization = `Bearer ${this.#token}`;

    const headers = new Headers(_init.headers);
    headers.set("tenant", this.#tenant);
    headers.set("authorization", authorization);
    _init.headers = headers;

    if (this.#debug) {
      console.debug(`${_init.method ?? "GET"} ${url}`);
    }

    return fetch(url, _init);
  }

  get i18n(): Promise<I18n> {
    if (!this.#i18n)
      this.#i18n = (async () => {
        return createI18n(this);
      })();
    return this.#i18n;
  }

  get jti() {
    return this.#jwt.jti;
  }

  get jwt() {
    return this.#token;
  }

  get language() {
    return this.#jwt.locale;
  }

  get timeZone() {
    return this.#jwt.timeZone;
  }

  get user() {
    return this.#jwt.sub;
  }

  get web() {
    if (!this.#web)
      this.#web = new Web(this);
    return this.#web;
  }
}

export function createFromToken(tenant: string, token: string, properties?: any) {
  // Checks
  if (!tenant)
    throw new Error("Missing argument: tenant");
  if (!token)
    throw new Error("Missing argument: token");

  return new Client(tenant, token, properties);
}

export async function connect(tenant: string, user: string, password: string, properties: any) {
  // Checks
  if (!tenant)
    throw new Error("Missing argument: tenant");
  if (!user)
    throw new Error("Missing argument: user");

  // Host
  const host = properties?.host ?? "https://api.zenerp.app.br";

  // 
  const response = await fetch(`${host}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      tenant,
    },
    body: JSON.stringify({
      username: user,
      password,
      properties,
    }),
  });
  if (!response.ok) {
    const text = await response.text();
    try {
      const json = JSON.parse(text);

      const error = new Error(`${response.status} ${json.message}`);
      (<any>error).stackTrace = json.stackTrace;
      throw error;
    } catch (error) {
      throw new Error(`${response.status} ${text}`);
    }
  }

  const token = await response.json();

  return createFromToken(tenant, token.accessToken);
}

function jwt(token: string): any {
  try {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(globalThis.atob(base64).split("").map(function (c) {
      return `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`;
    }).join(""));
    return JSON.parse(jsonPayload);
  } catch (error) {
    throw new Error("Error parsing token " + token);
  }
}
