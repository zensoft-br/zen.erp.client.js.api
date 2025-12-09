import { Client } from "../../../Client.js";
import { Job } from "./Job.js";

export class JobService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async jobDelete(id: number): Promise<Job> {
    return this.#client.web.fetchJson(`/system/job/job/${id}`, {
      method: "DELETE",
      
    });
  }

  async jobRead(search: any): Promise<Job[]> {
    return this.#client.web.fetchJson(`/system/job/job?${search}`, {
      method: "GET",
      
    });
  }

  async jobReadById(id: number): Promise<Job> {
    return this.#client.web.fetchJson(`/system/job/job/${id}`, {
      method: "GET",
      
    });
  }

  }
