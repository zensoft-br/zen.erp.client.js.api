import { Api } from "./api/api.js";
import { createI18n } from "./i18n.js";
import Web from "./web.js";

class Client {

  #tenant;
  #token;
  #jwt;
  #debug = false;

  #api;
  #i18n;
  #web;

  constructor(tenant, token) {
    this.#tenant = tenant;
    this.#token = token;
    this.#jwt = jwt(token);
  }

  async close() {
    // this.fetch();
  }

  async fetch(input, init) {
    const _input = `${this.#tenant}${input}`;

    const _init = init ?? {};

    // Add authorization header
    const authorization = `Bearer ${this.#token}`;
    if (_init.headers instanceof Headers) {
      _init.headers.append("Authorization", authorization);
    } else if (Array.isArray(_init.headers)) {
      _init.headers.push(["Authorization", authorization]);
    } else if (_init.headers) {
      _init.headers.Authorization = authorization;
    } else {
      _init.headers = { Authorization: authorization };
    }

    if (this.#debug) {
      console.debug(`${_init.method ?? "GET"} ${input}`);
    }

    return fetch(_input, _init);
  }

  get api() {
    if (!this.#api)
      this.#api = new Api(this);
    return this.#api;
  }

  get i18n() {
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

export function createFromToken(host, token, options) {
  // Tenant
  if (!host.toLowerCase().startsWith("http"))
    host = `https://${host}.zenerp.app.br:8443`;

  return new Client(host, token);
}

export async function connect(host, user, password, properties) {
  // Tenant
  if (!host.toLowerCase().startsWith("http"))
    host = `https://${host}.zenerp.app.br:8443`;

  const response = await fetch(`${host}/system/security/tokenOpRequest`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: user,
      password,
      properties,
    }),
  });
  if (!response.ok) {
    const o = await response.json();
    // throw new ZenError(o.message, o.stackTrace);
    throw new Error(o.message, o.stackTrace);
  }

  const token = await response.text();

  return createFromToken(host, token);
}

function jwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(globalThis.atob(base64).split("").map(function(c) {
    return `%${ (`00${ c.charCodeAt(0).toString(16)}`).slice(-2)}`;
  }).join(""));

  return JSON.parse(jsonPayload);
}
