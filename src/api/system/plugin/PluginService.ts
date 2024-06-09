import { Client } from "../../../Client.js";
import { Plugin } from "./Plugin.js";

export class PluginService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async pluginCreate(bean: any): Promise<Plugin> {
    return this.#client.web.fetchJson("/system/plugin/plugin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async pluginDelete(id: number): Promise<Plugin> {
    return this.#client.web.fetchJson(`/system/plugin/plugin/${id}`, {
      method: "DELETE",
      
    });
  }

  async pluginRead(search: any): Promise<Plugin[]> {
    return this.#client.web.fetchJson(`/system/plugin/plugin?${search}`, {
      method: "GET",
      
    });
  }

  }
