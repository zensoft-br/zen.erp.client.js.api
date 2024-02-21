export class StorageService {
  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }

  async get(key) {
    return this.#zenClient.web.fetchJson(`/system/storage/?key=${key}`, {
      method: "GET",

    });
  }

  async getNumber(key) {
    return this.#zenClient.web.fetchJson(`/system/storage/number?key=${key}`, {
      method: "GET",

    });
  }

  async getString(key) {
    return this.#zenClient.web.fetchJson(`/system/storage/string?key=${key}`, {
      method: "GET",

    });
  }

  async pointerGet(key, pointer) {
    return this.#zenClient.web.fetchJson(`/system/storage/pointer?key=${key}&pointer=${pointer}`, {
      method: "GET",

    });
  }

  async pointerGetNumber(key, pointer) {
    return this.#zenClient.web.fetchJson(`/system/storage/pointer/number?key=${key}&pointer=${pointer}`, {
      method: "GET",

    });
  }

  async pointerGetString(key, pointer) {
    return this.#zenClient.web.fetchJson(`/system/storage/pointer/string?key=${key}&pointer=${pointer}`, {
      method: "GET",

    });
  }

  async pointerPut(key, pointer, value) {
    this.#zenClient.web.fetchJson(`/system/storage/pointer?key=${key}&pointer=${pointer}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),

    });
  }

  async pointerPutNumber(key, pointer, value) {
    this.#zenClient.web.fetchJson(`/system/storage/pointer/number?key=${key}&pointer=${pointer}&value=${value}`, {
      method: "PUT",

    });
  }

  async pointerPutString(key, pointer, value) {
    this.#zenClient.web.fetchJson(`/system/storage/pointer/string?key=${key}&pointer=${pointer}&value=${value}`, {
      method: "PUT",

    });
  }

  async pointerRemove(key, pointer) {
    this.#zenClient.web.fetchJson(`/system/storage/pointer?key=${key}&pointer=${pointer}`, {
      method: "DELETE",

    });
  }

  async put(key, value) {
    this.#zenClient.web.fetchJson(`/system/storage/?key=${key}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),

    });
  }

  async putNumber(key, value) {
    this.#zenClient.web.fetchJson(`/system/storage/number?key=${key}&value=${value}`, {
      method: "PUT",

    });
  }

  async putString(key, value) {
    this.#zenClient.web.fetchJson(`/system/storage/string?key=${key}&value=${value}`, {
      method: "PUT",

    });
  }

  async remove(key) {
    this.#zenClient.web.fetchJson(`/system/storage/?key=${key}`, {
      method: "DELETE",

    });
  }

  async userGet(key) {
    return this.#zenClient.web.fetchJson(`/system/storage/user?key=${key}`, {
      method: "GET",

    });
  }

  async userGetNumber(key) {
    return this.#zenClient.web.fetchJson(`/system/storage/user/number?key=${key}`, {
      method: "GET",

    });
  }

  async userGetString(key) {
    return this.#zenClient.web.fetchJson(`/system/storage/user/string?key=${key}`, {
      method: "GET",

    });
  }

  async userPointerGet(key, pointer) {
    return this.#zenClient.web.fetchJson(`/system/storage/user/pointer?key=${key}&pointer=${pointer}`, {
      method: "GET",

    });
  }

  async userPointerGetNumber(key, pointer) {
    return this.#zenClient.web.fetchJson(`/system/storage/user/pointer/number?key=${key}&pointer=${pointer}`, {
      method: "GET",

    });
  }

  async userPointerGetString(key, pointer) {
    return this.#zenClient.web.fetchJson(`/system/storage/user/pointer/string?key=${key}&pointer=${pointer}`, {
      method: "GET",

    });
  }

  async userPointerPut(key, pointer, value) {
    this.#zenClient.web.fetchJson(`/system/storage/user/pointer?key=${key}&pointer=${pointer}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),

    });
  }

  async userPointerPutNumber(key, pointer, value) {
    this.#zenClient.web.fetchJson(`/system/storage/user/pointer/number?key=${key}&pointer=${pointer}&value=${value}`, {
      method: "PUT",

    });
  }

  async userPointerPutString(key, pointer, value) {
    this.#zenClient.web.fetchJson(`/system/storage/user/pointer/string?key=${key}&pointer=${pointer}&value=${value}`, {
      method: "PUT",

    });
  }

  async userPointerRemove(key, pointer) {
    this.#zenClient.web.fetchJson(`/system/storage/user/pointer?key=${key}&pointer=${pointer}`, {
      method: "DELETE",

    });
  }

  async userPut(key, value) {
    this.#zenClient.web.fetchJson(`/system/storage/user?key=${key}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),

    });
  }

  async userPutNumber(key, value) {
    this.#zenClient.web.fetchJson(`/system/storage/user/number?key=${key}&value=${value}`, {
      method: "PUT",

    });
  }

  async userPutString(key, value) {
    this.#zenClient.web.fetchJson(`/system/storage/user/string?key=${key}&value=${value}`, {
      method: "PUT",

    });
  }

  async userRemove(key) {
    this.#zenClient.web.fetchJson(`/system/storage/user?key=${key}`, {
      method: "DELETE",

    });
  }

}
