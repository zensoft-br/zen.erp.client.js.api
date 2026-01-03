import { Client } from "../../Client.js";
import { ArgsCustomPropertiesOpSet } from "./ArgsCustomPropertiesOpSet.js";
import { Info } from "./Info.js";
import { Status } from "./Status.js";
import { Test } from "./Test.js";

export class SystemService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async checkAuth(): Promise<void> {
    return this.#client.web.fetchJson("/system/checkAuth", {
      method: "GET",
      
    });
  }

  async customPropertiesOpSet(args: ArgsCustomPropertiesOpSet): Promise<void> {
    return this.#client.web.fetchJson("/system/customPropertiesOpSet", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async customTagsOpSet(entity: string, tag: string): Promise<void> {
    const sp = new URLSearchParams();
    if (entity) sp.set("entity", String(entity));
    if (tag) sp.set("tag", String(tag));
    return this.#client.web.fetchJson(`/system/customTagsOpSet?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async databaseOpOptimize(): Promise<void> {
    return this.#client.web.fetchJson("/system/databaseOpOptimize", {
      method: "POST",
      
    });
  }

  async infoRead(): Promise<Info> {
    return this.#client.web.fetchJson("/system/info", {
      method: "GET",
      
    });
  }

  async lockOpAcquire(id: string, waitTime: string, leaseTime: string): Promise<string> {
    const sp = new URLSearchParams();
    if (waitTime) sp.set("waitTime", String(waitTime));
    if (leaseTime) sp.set("leaseTime", String(leaseTime));
    return this.#client.web.fetchText(`/system/lockOpAcquire/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async lockOpExtend(id: string, lockToken: string, leaseTime: string): Promise<void> {
    const sp = new URLSearchParams();
    if (lockToken) sp.set("lockToken", String(lockToken));
    if (leaseTime) sp.set("leaseTime", String(leaseTime));
    return this.#client.web.fetchJson(`/system/lockOpExtend/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async lockOpRelease(id: string, lockToken: string): Promise<void> {
    const sp = new URLSearchParams();
    if (lockToken) sp.set("lockToken", String(lockToken));
    return this.#client.web.fetchJson(`/system/lockOpRelease/${id}?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async resourcesRead(locale: string): Promise<any> {
    const sp = new URLSearchParams();
    if (locale) sp.set("locale", String(locale));
    return this.#client.web.fetchJson(`/system/resources?${sp.toString()}`, {
      method: "GET",
      
    });
  }

  async statusCreate(bean: Status): Promise<Status> {
    return this.#client.web.fetchJson("/system/status", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async statusDelete(id: number): Promise<Status> {
    return this.#client.web.fetchJson(`/system/status/${id}`, {
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
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async testCreate(test: Test): Promise<Test> {
    return this.#client.web.fetchJson("/system/test", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
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
