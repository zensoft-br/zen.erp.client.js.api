import { Client } from "../../../Client.js";
import { Inject } from "./Inject.js";
import { Menu } from "./Menu.js";

export class FrontendService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async injectsRead(): Promise<Inject[]> {
    return this.#client.web.fetchJson("/system/frontend/injects", {
      method: "GET",
      
    });
  }

  async injectsUpdate(injects: any): Promise<Inject[]> {
    return this.#client.web.fetchJson("/system/frontend/injects", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(injects),

    });
  }

  async menuRead(): Promise<Map<string,Menu>> {
    return this.#client.web.fetchJson("/system/frontend/menu", {
      method: "GET",
      
    });
  }

  async menuUpdate(menu: any): Promise<Map<string,Menu>> {
    return this.#client.web.fetchJson("/system/frontend/menu", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(menu),

    });
  }

  async resourcesRead(): Promise<Map<string,Map<string,string>>> {
    return this.#client.web.fetchJson("/system/frontend/resources", {
      method: "GET",
      
    });
  }

  async resourcesUpdate(resources: any): Promise<Map<string,Map<string,string>>> {
    return this.#client.web.fetchJson("/system/frontend/resources", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(resources),

    });
  }

  }
