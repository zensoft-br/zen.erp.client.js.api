import { Client } from "../../../Client.js";
export class InfoService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async healthRead(): Promise<string> {
    return this.#client.web.fetchJson("/system/info/health", {
      method: "GET",
      
    });
  }

  async metricsRead(): Promise<string> {
    return this.#client.web.fetchJson("/system/info/metrics", {
      method: "GET",
      
    });
  }

  }
