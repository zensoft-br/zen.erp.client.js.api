import { Client } from "../../../Client.js";
import { Source } from "./Source.js";
import { Log } from "./Log.js";

export class AuditService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async logCreate(args: any): Promise<Log> {
    return this.#client.web.fetchJson("/system/audit/log", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async logOpDeleteExpired(): Promise<number> {
    return this.#client.web.fetchJson("/system/audit/logOpDeleteExpired", {
      method: "POST",
      
    });
  }

  async logRead(search: any): Promise<Log[]> {
    return this.#client.web.fetchJson(`/system/audit/log?${search}`, {
      method: "GET",
      
    });
  }

  async logReadById(id: number): Promise<Log> {
    return this.#client.web.fetchJson(`/system/audit/log/${id}`, {
      method: "GET",
      
    });
  }

  async sourceOpReadByEntity(entity: string, entityId: string): Promise<Source> {
    const sp = new URLSearchParams();
    if (entity) sp.set("entity", String(entity));
    if (entityId) sp.set("entityId", String(entityId));
    return this.#client.web.fetchJson(`/system/audit/sourceOpReadByEntity?${sp.toString()}`, {
      method: "POST",
      
    });
  }

  async sourceRead(search: any): Promise<Source[]> {
    return this.#client.web.fetchJson(`/system/audit/source?${search}`, {
      method: "GET",
      
    });
  }

  async sourceReadById(id: number): Promise<Source> {
    return this.#client.web.fetchJson(`/system/audit/source/${id}`, {
      method: "GET",
      
    });
  }

  async userLogCreate(args: any): Promise<Log> {
    return this.#client.web.fetchJson("/system/audit/userLog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(args),

    });
  }

  async userLogDelete(id: number): Promise<void> {
    this.#client.web.fetchJson(`/system/audit/userLog/${id}`, {
      method: "DELETE",
      
    });
  }

  async userLogRead(search: any): Promise<Log[]> {
    return this.#client.web.fetchJson(`/system/audit/userLog?${search}`, {
      method: "GET",
      
    });
  }

  async userLogReadById(id: number): Promise<Log> {
    return this.#client.web.fetchJson(`/system/audit/userLog/${id}`, {
      method: "GET",
      
    });
  }

  async userLogUpdate(bean: Log): Promise<Log> {
    return this.#client.web.fetchJson("/system/audit/userLog", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
