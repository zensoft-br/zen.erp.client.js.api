import { Client } from "../../../Client.js";
export class MetricService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async metricsRead(): Promise<string> {
    return this.#client.web.fetchJson("/system/metric/metrics", {
      method: "GET",
      
    });
  }

  async statusRead(): Promise<string> {
    return this.#client.web.fetchJson("/system/metric/status", {
      method: "GET",
      
    });
  }

  }
