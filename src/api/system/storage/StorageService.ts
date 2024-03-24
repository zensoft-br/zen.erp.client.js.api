import { Client } from "../../../Client.js";
export class StorageService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async get(key: string): Promise<any> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchText(`/system/storage/?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async getNumber(key: string): Promise<number> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchText(`/system/storage/number?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async getString(key: string): Promise<string> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchText(`/system/storage/string?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async put(key: string, value: any): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchJson(`/system/storage/?${sp.toString()}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(value),

    });
  }

  async putNumber(key: string, value: number): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/system/storage/number?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async putString(key: string, value: string): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/system/storage/string?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async remove(key: string): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchJson(`/system/storage/?${sp.toString()}`, {
      method: "DELETE",
      
    });
  }

  async userGet(key: string): Promise<any> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchText(`/system/storage/user?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async userGetNumber(key: string): Promise<number> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchText(`/system/storage/user/number?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async userGetString(key: string): Promise<string> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchText(`/system/storage/user/string?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async userPut(key: string, value: any): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchJson(`/system/storage/user?${sp.toString()}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(value),

    });
  }

  async userPutNumber(key: string, value: number): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/system/storage/user/number?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async userPutString(key: string, value: string): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    if (value) sp.set("value", String(value));
    return this.#client.web.fetchJson(`/system/storage/user/string?${sp.toString()}`, {
      method: "PUT",
      
    });
  }

  async userRemove(key: string): Promise<void> {
    const sp = new URLSearchParams();
    if (key) sp.set("key", String(key));
    return this.#client.web.fetchJson(`/system/storage/user?${sp.toString()}`, {
      method: "DELETE",
      
    });
  }

  }
