import { Client } from "../../Client.js";
import { Info } from "./Info.js";
import { Test } from "./Test.js";
import { Status } from "./Status.js";

export class SystemService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async checkAuth(): Promise<void> {
    this.#client.web.fetchJson("/system/checkAuth", {
      method: "GET",
      
    });
  }

  async customPropertiesOpSet(args: any): Promise<void> {
    this.#client.web.fetchJson("/system/customPropertiesOpSet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async customTagsOpSet(entity: string, tag: string): Promise<void> {
    const sp = new URLSearchParams();
    if (entity) sp.set("entity", String(entity));
    if (tag) sp.set("tag", String(tag));
    this.#client.web.fetchJson(`/system/customTagsOpSet?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async infoRead(): Promise<Info> {
    return this.#client.web.fetchJson("/system/info", {
      method: "GET",
      
    });
  }

  async resourcesRead(): Promise<Object> {
    return this.#client.web.fetchJson("/system/resources", {
      method: "GET",
      
    });
  }

  async statusCreate(bean: Status): Promise<Status> {
    return this.#client.web.fetchJson("/system/status", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async statusDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/status/${id}`, {
      method: "DELETE",
      
    });
  }

  async statusRead(search: any): Promise<Status[]> {
    return this.#client.web.fetchJson(`/system/status?${search}`, {
      method: "GET",
      
    });
  }

  async statusReadById(id: number): Promise<Status> {
    return this.#client.web.fetchJson(`/system/status/${id}`, {
      method: "GET",
      
    });
  }

  async statusUpdate(bean: Status): Promise<Status> {
    return this.#client.web.fetchJson("/system/status", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async testCreate(test: Test): Promise<Test> {
    return this.#client.web.fetchJson("/system/test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(test),

    });
  }

  async testRead(): Promise<Test> {
    return this.#client.web.fetchJson("/system/test", {
      method: "GET",
      
    });
  }

  }
