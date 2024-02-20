import { createI18n } from "./i18n.js";
import Web from "./web.js";

class Client {

  #tenant;
  #token;
  #jwt;
  #debug = false;

  // #api;
  #i18n;
  #web;

  constructor(tenant, token) {
    this.#tenant = tenant;
    this.#token = token;
    this.#jwt = JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
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

  // get api() {
  //   if (!this.#api)
  //     this.#api = new API(this);
  //   return this.#api;
  // }

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

export function createFromHostAndToken(host, token, options) {
  return new Client(host, token);
}

export function createFromTenantAndToken(tenant, token, options) {
  return createFromHostAndToken(`https://${tenant}.zenerp.app.br:8443`, token, options);
}

export async function loginAtHost(host, user, password, properties) {
  // const i18n = await createI18n(properties?.locale, properties?.timeZone);

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

  return createFromHostAndToken(host, token);
}

export async function loginAtTenant(tenant, user, password, properties) {
  return loginAtHost(`https://${tenant}.zenerp.app.br:8443`, user, password, properties);
}
