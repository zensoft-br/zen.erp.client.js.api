export class StorageService {

  #zenClient;

  constructor(zenClient) {
    this.#zenClient = zenClient;
  }
  
  async get(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    return this.#zenClient.web.fetchJson(`/system/storage/?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async getNumber(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    return this.#zenClient.web.fetchJson(`/system/storage/number?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async getString(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    return this.#zenClient.web.fetchJson(`/system/storage/string?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async put(key, value) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    this.#zenClient.web.fetchJson(`/system/storage/?${sp.toString()}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(value),

    });
  }

  async putNumber(key, value) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    if (value) sp.set("value", value);
    this.#zenClient.web.fetchJson(`/system/storage/number?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async putString(key, value) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    if (value) sp.set("value", value);
    this.#zenClient.web.fetchJson(`/system/storage/string?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async remove(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    this.#zenClient.web.fetchJson(`/system/storage/?${sp.toString()}`, {
      method: "DELETE",
      
    });
  }

  async userGet(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    return this.#zenClient.web.fetchJson(`/system/storage/user?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async userGetNumber(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    return this.#zenClient.web.fetchJson(`/system/storage/user/number?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async userGetString(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    return this.#zenClient.web.fetchJson(`/system/storage/user/string?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async userPut(key, value) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    this.#zenClient.web.fetchJson(`/system/storage/user?${sp.toString()}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(value),

    });
  }

  async userPutNumber(key, value) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    if (value) sp.set("value", value);
    this.#zenClient.web.fetchJson(`/system/storage/user/number?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async userPutString(key, value) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    if (value) sp.set("value", value);
    this.#zenClient.web.fetchJson(`/system/storage/user/string?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async userRemove(key) {
    const sp = new URLSearchParams();
    if (key) sp.set("key", key);
    this.#zenClient.web.fetchJson(`/system/storage/user?${sp.toString()}`, {
      method: "DELETE",
      
    });
  }

  }
