import { Client } from "../../../Client.js";
import { Agent } from "./Agent.js";
import { Schedule } from "./Schedule.js";
import { Watcher } from "./Watcher.js";

export class AutomationService {

  #client: Client;

  constructor(client: Client) {
    this.#client = client;
  }
  
  async agentCreate(bean: Agent): Promise<Agent> {
    return this.#client.web.fetchJson("/system/automation/agent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async agentDelete(id: number): Promise<Agent> {
    return this.#client.web.fetchJson(`/system/automation/agent/${id}`, {
      method: "DELETE",
      
    });
  }

  async agentOpExecute(id: number, parameters: any): Promise<void> {
    return this.#client.web.fetchJson(`/system/automation/agentOpExecute/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(parameters),

    });
  }

  async agentRead(search: any): Promise<Agent[]> {
    return this.#client.web.fetchJson(`/system/automation/agent?${search}`, {
      method: "GET",
      
    });
  }

  async agentReadById(id: number): Promise<Agent> {
    return this.#client.web.fetchJson(`/system/automation/agent/${id}`, {
      method: "GET",
      
    });
  }

  async agentUpdate(bean: Agent): Promise<Agent> {
    return this.#client.web.fetchJson("/system/automation/agent", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async scheduleCreate(bean: Schedule): Promise<Schedule> {
    return this.#client.web.fetchJson("/system/automation/schedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async scheduleDelete(id: number): Promise<Schedule> {
    return this.#client.web.fetchJson(`/system/automation/schedule/${id}`, {
      method: "DELETE",
      
    });
  }

  async scheduleOpExecute(id: number): Promise<Schedule> {
    return this.#client.web.fetchJson(`/system/automation/scheduleOpExecute/${id}`, {
      method: "POST",
      
    });
  }

  async scheduleRead(search: any): Promise<Schedule[]> {
    return this.#client.web.fetchJson(`/system/automation/schedule?${search}`, {
      method: "GET",
      
    });
  }

  async scheduleReadById(id: number): Promise<Schedule> {
    return this.#client.web.fetchJson(`/system/automation/schedule/${id}`, {
      method: "GET",
      
    });
  }

  async scheduleUpdate(bean: Schedule): Promise<Schedule> {
    return this.#client.web.fetchJson("/system/automation/schedule", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async watcherCreate(bean: Watcher): Promise<Watcher> {
    return this.#client.web.fetchJson("/system/automation/watcher", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  async watcherDelete(id: number): Promise<Watcher> {
    return this.#client.web.fetchJson(`/system/automation/watcher/${id}`, {
      method: "DELETE",
      
    });
  }

  async watcherRead(search: any): Promise<Watcher[]> {
    return this.#client.web.fetchJson(`/system/automation/watcher?${search}`, {
      method: "GET",
      
    });
  }

  async watcherReadById(id: number): Promise<Watcher> {
    return this.#client.web.fetchJson(`/system/automation/watcher/${id}`, {
      method: "GET",
      
    });
  }

  async watcherUpdate(bean: Watcher): Promise<Watcher> {
    return this.#client.web.fetchJson("/system/automation/watcher", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        },
        body: JSON.stringify(bean),

    });
  }

  }
